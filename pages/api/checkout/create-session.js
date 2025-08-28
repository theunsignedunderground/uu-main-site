export default async function handler(req, res) {
  // For any non-POST, return 405 and exit — this should NEVER 500.
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res
      .status(405)
      .json({ ok: false, message: 'Method Not Allowed', method: req.method });
  }

  // Guard: if Stripe key isn't set, say so (no crash).
  const secret = process.env.STRIPE_SECRET_KEY || '';
  if (!secret.trim()) {
    return res
      .status(503)
      .json({ error: 'Stripe is not configured yet. Add STRIPE_SECRET_KEY.' });
  }

  // Lazy import Stripe only after we know the key is present.
  const { default: Stripe } = await import('stripe');
  const stripe = new Stripe(secret);

  try {
    const line_items =
      req.body?.line_items ??
      [{ price: process.env.STRIPE_TEST_PRICE_ID, quantity: 1 }];

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items,
      success_url: `${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/cancel`,
    });

    return res.status(200).json({ id: session.id, url: session.url });
  } catch (err) {
    console.error('create-session error:', err);
    return res.status(500).json({ error: err?.message || 'Internal Server Error' });
  }
}
