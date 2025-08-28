module.exports = async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).end('Method Not Allowed');
  }

  // Check Stripe key first (avoid crashing on import)
  const secret = process.env.STRIPE_SECRET_KEY;
  if (!secret || typeof secret !== 'string' || !secret.trim()) {
    // Clear, non-500 message so you know what's missing
    return res.status(503).json({
      error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY in Railway.',
    });
  }

  // Lazy-load stripe so GET requests don’t crash if key is missing
  const Stripe = require('stripe');
  const stripe = new Stripe(secret);

  try {
    const line_items = req.body?.line_items ?? [
      // fallback: requires you to set this env var or pass line_items from client
      { price: process.env.STRIPE_TEST_PRICE_ID, quantity: 1 },
    ];

    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('create-session error:', err);
    return res.status(500).json({ error: err.message || 'Internal Server Error' });
  }
};
