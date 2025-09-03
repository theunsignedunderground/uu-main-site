// components/Header.js
export default function Header() {
  return (
    <header style={wrap}>
      <a href="/" style={logo}>The Unsigned Underground</a>
      <nav style={nav}>
        <a href="/faq" style={link}>FAQ</a>
        <a href="/pricing" style={link}>Pricing</a>
        <a href="/dashboard" style={link}>Dashboard</a>
        <a href="/login" style={btnPrimary}>Log in / Create account</a>
      </nav>
    </header>
  );
}

/* ---- Styles ---- */
const colors = { outlawRed: "#e11d2e", vintageCream: "#fdf5e6", black: "#000" };

const wrap = {
  maxWidth: 1100,
  margin: "0 auto",
  padding: "12px 20px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: `2px solid ${colors.outlawRed}`,
  background: colors.black
};

const logo = { textDecoration: "none", color: colors.vintageCream, fontWeight: 800 };
const nav = { display: "flex", gap: 14, alignItems: "center" };
const link = { textDecoration: "none", color: colors.vintageCream, opacity: 0.95 };
const btnPrimary = {
  textDecoration: "none",
  padding: "8px 12px",
  borderRadius: 10,
  border: `1px solid ${colors.outlawRed}`,
  background: colors.outlawRed,
  color: colors.vintageCream,
  fontWeight: 700
};
