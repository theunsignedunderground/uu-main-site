// pages/api/checkout/create-session.js
import Stripe from "stripe";
export const config = { api: { bodyParser: true } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" });

const PRICE_MAP = {
  annual: process.env.STRIPE_PRICE_ANNUAL,
  monthly: process.env.STRIPE_PRICE_MONTHLY,
  fast_track: process.env.STRIPE_PRICE_FAST_TRACK,
};

const SUBSCRIPTION_SET = new Set([PRICE_MAP.annual, PRICE_MAP.monthly]);

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const { plan, customerEmail } = req.body;
    const priceId = PRICE_MAP[plan];
    if (!priceId) return res.status(400).json({ error: "Invalid plan" });

    const mode = SUBSCRIPTION_SET.has(priceId) ? "subscription" : "payment";

    const session = await stripe.checkout.sessions.create({
      mode,
      line_items: [{ price: priceId, quantity: 1 }],
      customer_email: customerEmail || undefined,
      allow_promotion_codes: true,
      billing_address_collection: "auto",
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
      metadata: { plan }, // helpful in the webhook
    });

    res.status(200).json({ url: session.url });
  } catch (err) {
    console.error("create-session error:", err);
    res.status(400).json({ error: { message: err.message } });
  }
}
