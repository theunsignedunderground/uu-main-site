export const config = { api: { bodyParser: false } }; // raw body for Stripe signature

import { buffer } from "micro";

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).end();

  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  const stripeKey = process.env.STRIPE_SECRET_KEY;
  if (!secret || !stripeKey) return res.status(500).end("Webhook env missing");

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(stripeKey, { apiVersion: "2024-06-20" });

  let event;
  try {
    const sig = req.headers["stripe-signature"];
    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(buf, sig, secret);
  } catch (err) {
    console.error("Webhook signature error:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      // Pull basic artist “shell” info
      const email = session.customer_details?.email || session.customer_email;
      const name = session.customer_details?.name || "Artist";
      // For now, just log; later we’ll trigger jobs + create real artist record
      console.log("✅ Payment complete:", { email, name, session_id: session.id });

      // Example: trigger our safe job stubs (kept OFF by feature flag)
      // (You can enable later; leaving as a comment now)
      // await fetch(`${process.env.SITE_URL}/api/jobs/generate-pr?artistId=demo-artist-1`);
    }

    res.json({ received: true });
  } catch (err) {
    console.error("Webhook handler error:", err);
    res.status(500).json({ error: "Webhook handler failed" });
  }
}
