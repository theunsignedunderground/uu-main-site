// pages/orders.js
import Head from "next/head";
import { SignedIn, SignedOut } from "@clerk/nextjs";

export default function Orders() {
  const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };

  // TODO: Replace with real data fetched from your DB via getServerSideProps
  // Strategy: On `checkout.session.completed` webhook, create an "Order" record with:
  //  - shortOrderId (e.g., base36 of charge id or last 8 chars uppercased)
  //  - email, plan, line_items (name/qty), amount_total, currency, createdAt
  const mockOrders = [
    {
      id: "UU-8F3K9A2C",
      date: "2025-09-09",
      items: [
        { name: "Annual Plan", desc: "12 months Showcase + PR + tools", qty: 1 }
      ],
      total: 29900,
      currency: "USD"
    },
    {
      id: "UU-72D1XE4B",
      date: "2025-09-07",
      items: [
        { name: "Underground Fast Track", desc: "PR + Playlists (no site)", qty: 1 }
      ],
      total: 14995,
      currency: "USD"
    }
  ];

  const fmtMoney = (cents, curr="USD") =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: curr }).format((cents||0)/100);

  return (
    <>
      <Head>
        <title>My Orders — The Unsigned Underground</title>
        <meta name="description" content="View your past orders and purchases." />
      </Head>

      <main>
        <SignedOut>
          <section className="wrap">
            <div className="card">
              <h1>Please sign in</h1>
              <p className="lead">
                This page is for members only. <a href="/sign-in">Sign in</a> to continue.
              </p>
            </div>
          </section>
        </SignedOut>

        <SignedIn>
          <section className="wrap">
            <h1>My Orders</h1>
            <p className="lead">Your recent purchases and add-ons.</p>

            <div className="list">
              {mockOrders.map((o) => (
                <article key={o.id} className="order">
                  <header className="orderHead">
                    <div>
                      <div className="ordId">Order {o.id}</div>
                      <div className="ordDate">{o.date}</div>
                    </div>
                    <div className="ordTotal">{fmtMoney(o.total, o.currency)}</div>
                  </header>

                  <div className="lines">
                    {o.items.map((it, idx) => (
                      <div key={idx} className="line">
                        <div className="lineName">{it.name}</div>
                        <div className="lineDesc">{it.desc}</div>
                        <div className="lineQty">Qty: {it.qty}</div>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </SignedIn>
      </main>

      <style jsx>{`
        :root { --w: 1100px; }
        main { background: ${colors.black}; color: ${colors.vintageCream}; min-height: 100vh; }
        .wrap { max-width: var(--w); margin: 0 auto; padding: 48px 20px 80px; }

        h1 { margin: 0 0 6px; font-size: clamp(26px, 3.2vw, 40px); line-height: 1.15; }
        .lead { color: #f5eede; margin: 0 0 14px; font-size: clamp(16px, 1.9vw, 20px); }

        .list { display: grid; gap: 14px; }
        .order {
          border: 1px solid #2b2b2b; background: #0b0b0b; border-radius: 14px; padding: 14px;
        }
        .orderHead {
          display: flex; align-items: center; justify-content: space-between;
          border-bottom: 1px solid #1b1b1b; padding-bottom: 8px; margin-bottom: 10px;
        }
        .ordId { font-weight: 800; }
        .ordDate { color: #d9d3c7; font-size: 14px; }
        .ordTotal { font-weight: 800; color: ${colors.outlawRed}; }

        .lines { display: grid; gap: 10px; }
        .line { display: grid; gap: 2px; }
        .lineName { font-weight: 700; }
        .lineDesc { color: #eae3d7; }
        .lineQty { color: #cfc7bb; font-size: 14px; }

        /* generic card for signed-out message */
        .card { border: 1px solid #2b2b2b; background: #0b0b0b; border-radius: 14px; padding: 16px; }
      `}</style>
    </>
  );
}
