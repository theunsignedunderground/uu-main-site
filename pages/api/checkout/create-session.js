// Minimal Stripe Checkout creator: returns a URL to redirect the user
export default async function handler(req, res) {
  if (req.method !== "GET") return res.status(405).end();

  const stripeSecret = process.env.STRIPE_SECRET_KEY;
  const priceRecurring = process.env.STRIPE_PRICE_RECURRING;
  const priceSetup = process.env.STRIPE_PRICE_SETUP;
  const siteUrl = process.env.SITE_URL || `https://${req.headers.host}`;

  if (!stripeSecret || !priceRecurring || !priceSetup) {
    return res.status(500).json({ error: "Stripe env vars missing" });
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(stripeSecret, { apiVersion: "2024-06-20" });

  try {
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      line_items: [
        { price: priceRecurring, quantity: 1 },
        { price: priceSetup, quantity: 1 }
      ],
      success_url: `${siteUrl}/onboarding?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${siteUrl}/?canceled=1`,
      // expand to get customer email on webhook easily
      customer_creation: "always",
      allow_promotion_codes: true,
    });

    // Redirect the browser to Stripe-hosted checkout
    res.writeHead(303, { Location: session.url });
    res.end();
  } catch (e) {
    console.error("Stripe create-session error:", e);
    res.status(500).json({ error: "Failed to create checkout session" });
  }
}
