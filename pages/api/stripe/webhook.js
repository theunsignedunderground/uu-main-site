// pages/api/stripe/webhook.js
import Stripe from "stripe";
import { buffer } from "micro";

export const config = { api: { bodyParser: false } };

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2024-06-20",
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send("Method not allowed");
  }

  const sig = req.headers["stripe-signature"];
  let event;

  try {
    if (!process.env.STRIPE_WEBHOOK_SECRET) {
      console.error("❌ Missing STRIPE_WEBHOOK_SECRET");
      return res.status(500).send("Missing webhook secret");
    }

    const buf = await buffer(req);
    event = stripe.webhooks.constructEvent(
      buf,
      sig,
      process.env.STRIPE_WEBHOOK_SECRET
    );
  } catch (err) {
    console.error("❌ Signature verification failed:", err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object;
        console.log("✅ checkout.session.completed", {
          id: session.id,
          mode: session.mode, // "subscription" | "payment"
          email: session.customer_email,
          plan: session.metadata?.plan,
        });
        break;
      }
      case "invoice.payment_succeeded": {
        const inv = event.data.object;
        console.log("ℹ️ invoice.payment_succeeded", {
          id: inv.id,
          customer: inv.customer,
        });
        break;
      }
      case "customer.subscription.deleted": {
        const sub = event.data.object;
        console.log("ℹ️ customer.subscription.deleted", {
          id: sub.id,
          status: sub.status,
        });
        break;
      }
      default:
        console.log("↳ Ignored event:", event.type);
    }

    // Always ack quickly so Stripe stops retrying
    return res.json({ received: true });
  } catch (err) {
    console.error("❌ Webhook handler error:", err);
    return res.status(500).send("Webhook handler failed");
  }
}
