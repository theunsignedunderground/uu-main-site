// pages/success.js
import Head from "next/head";
import Stripe from "stripe";

export async function getServerSideProps({ query }) {
  const sessionId = query.session_id || null;

  if (!sessionId) {
    return { props: { ok: false, error: "Missing session_id in URL." } };
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: "2024-06-20",
    });

    // Expand relationships so we can show useful details
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: [
        "line_items.data.price.product",
        "payment_intent.charges.data",
        "customer",
        "subscription",
      ],
    });

    const email =
      session.customer_details?.email ||
      session.customer_email ||
      null;

    const plan = session.metadata?.plan || null; // 'annual' | 'monthly' | 'fast_track'
    const amount = session.amount_total || 0;
    const currency = (session.currency || "usd").toUpperCase();

    // Order/receipt info
    const paymentIntent =
      typeof session.payment_intent === "string"
        ? { id: session.payment_intent }
        : session.payment_intent || null;

    const charge = paymentIntent?.charges?.data?.[0] || null;
    const receiptUrl = charge?.receipt_url || null;
    const orderId = charge?.id || session.id;

    // Subscription info (for monthly/annual)
    const subId =
      typeof session.subscription === "string"
        ? session.subscription
        : session.subscription?.id || null;

    // Build a minimal line items summary
    const items =
      session.line_items?.data?.map((li) => {
        const price = li.price;
        const product =
          typeof price?.product === "object" ? price.product : null;
        return {
          name:
            product?.name ||
            price?.nickname ||
            "Unsigned Underground Plan",
          qty: li.quantity || 1,
        };
      }) || [];

    return {
      props: {
        ok: true,
        data: {
          sessionId,
          email,
          plan,
          amount,
          currency,
          orderId,
          receiptUrl,
          subId,
          items,
          mode: session.mode, // 'subscription' | 'payment'
        },
      },
    };
  } catch (err) {
    console.error("Success page fetch error:", err);
    return {
      props: {
        ok: false,
        error: "We could not load your order details. If paid, check your email.",
      },
    };
  }
}

export default function SuccessPage({ ok, error, data }) {
  const colors = {
    outlawRed: "#e11d2e",
    vintageCream: "#fdf5e6",
    black: "#000000",
  };

  function fmtUsd(cents) {
    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: data?.currency || "USD",
      }).format((cents || 0) / 100);
    } catch {
      return `$${((cents || 0) / 100).toFixed(2)} ${data?.currency || "USD"}`;
    }
  }

  return (
    <>
      <Head>
        <title>Payment Confirmed — The Unsigned Underground</title>
        <meta
          name="description"
          content="Thank you — your payment was successful. Next steps and receipt details."
        />
      </Head>

      <main>
        <section className="wrap">
          <div className="card">
            {!ok ? (
              <>
                <h1>We’re checking your payment…</h1>
                <p className="muted">
                  {error ||
                    "If you completed checkout, your payment may still be finalizing. Try refreshing this page in a moment."}
                </p>
                <div className="actions">
                  <a className="btn outline" href="/">Back to Home</a>
                </div>
              </>
            ) : (
              <>
                <div className="badge">Payment confirmed</div>
                <h1>Welcome to The Unsigned Underground</h1>

                <p className="lead">
                  Thank you{data?.email ? `, ${data.email}` : ""}! Your{" "}
                  <strong>
                    {data?.plan === "annual"
                      ? "Annual Plan"
                      : data?.plan === "monthly"
                      ? "Monthly Plan"
                      : "Underground Fast Track"}
                  </strong>{" "}
                  is active.
                </p>

                <div className="grid">
                  <div className="box">
                    <h3>Order summary</h3>
                    <ul className="list">
                      {data?.items?.map((it, idx) => (
                        <li key={idx}>
                          {it.qty} × {it.name}
                        </li>
                      ))}
                      <li>
                        <strong>Total:</strong> {fmtUsd(data?.amount)}{" "}
                        {data?.currency}
                      </li>
                      <li>
                        <strong>Order ID:</strong> {data?.orderId}
                      </li>
                      {data?.subId && (
                        <li>
                          <strong>Subscription:</strong> {data.subId}
                        </li>
                      )}
                    </ul>
                    {data?.receiptUrl && (
                      <a className="btn outline" href={data.receiptUrl} target="_blank" rel="noreferrer">
                        View Stripe Receipt
                      </a>
                    )}
                  </div>

                  <div className="box">
                    <h3>What happens next?</h3>
                    <ol className="olist">
                      {data?.mode === "subscription" ? (
                        <>
                          <li>You’ll receive a confirmation email shortly.</li>
                          <li>
                            Your dashboard access will unlock if you already
                            have an account. If not, create one with the same
                            email you used at checkout.
                          </li>
                          <li>We’ll start your onboarding and PR prep.</li>
                        </>
                      ) : (
                        <>
                          <li>You’ll receive a confirmation email shortly.</li>
                          <li>
                            We’ll kick off your PR deliverables and playlist
                            placement.
                          </li>
                          <li>
                            You can manage assets and updates from your
                            dashboard.
                          </li>
                        </>
                      )}
                    </ol>
                  </div>
                </div>

                <div className="actions">
                  <a className="btn solid" href="/dashboard">Go to Dashboard</a>
                  <button className="btn outline" onClick={() => window.print()}>
                    Print Receipt
                  </button>
                  <a className="btn ghost" href="/">Back to Home</a>
                </div>

                <p className="fine">
                  Need help? Email support at{" "}
                  <a href="mailto:support@unsignedunderground.com">
                    support@unsignedunderground.com
                  </a>
                  .
                </p>
              </>
            )}
          </div>
        </section>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: ${colors.black}; color: ${colors.vintageCream}; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }
        .card {
          border: 1px solid #2b2b2b; background: #0b0b0b; border-radius: 16px;
          padding: 24px; position: relative;
        }
        .badge {
          position: absolute; top: -12px; right: -12px;
          background: ${colors.outlawRed}; color: ${colors.vintageCream};
          padding: 6px 10px; border-radius: 8px; font-weight: 800; font-size: 12px;
        }
        h1 { margin: 8px 0 6px; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.15; }
        .lead { color: #f5eede; margin: 6px 0 16px; font-size: clamp(16px, 1.9vw, 20px); }
        .grid { display: grid; gap: 16px; grid-template-columns: 1fr; }
        @media (min-width: 900px) { .grid { grid-template-columns: 1fr 1fr; } }
        .box { border: 1px solid #1b1b1b; border-radius: 12px; padding: 16px; }
        h3 { margin: 0 0 8px; font-size: clamp(18px, 2.2vw, 22px); }
        .list { margin: 0 0 12px; padding-left: 1.1em; line-height: 1.6; }
        .olist { margin: 0; padding-left: 1.2em; line-height: 1.6; }
        .actions { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px; }
        .btn {
          font-size: 16px; padding: 10px 14px; border-radius: 12px; text-decoration: none;
          display: inline-block; cursor: pointer; border: 2px solid transparent;
        }
        .btn.solid { background: ${colors.outlawRed}; color: ${colors.vintageCream}; border-color: ${colors.outlawRed}; }
        .btn.outline { background: transparent; color: ${colors.vintageCream}; border-color: ${colors.outlawRed}; }
        .btn.ghost { background: transparent; color: ${colors.vintageCream}; border: 1px solid ${colors.outlawRed}; }
        .fine { margin-top: 14px; color: #d9d3c7; font-size: 12px; }
        .muted { color: #d9d3c7; }
        @media print {
          .actions, .badge { display: none; }
          .card { border: none; background: #fff; color: #000; }
        }
      `}</style>
    </>
  );
}
