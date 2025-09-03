import { useSession, signIn, signOut } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();

  return (
    <header style={wrap}>
      <a href="/" style={logo}>The Unsigned Underground</a>
      <nav style={nav}>
        <a href="/faq" style={link}>FAQ</a>
        <a href="/pricing" style={link}>Pricing</a>
        {session ? (
          <>
            <a href="/dashboard" style={link}>Dashboard</a>
            <button onClick={() => signOut()} style={btnLink}>Sign out</button>
          </>
        ) : (
          <button onClick={() => signIn()} style={btnPrimary}>Log in / Create account</button>
        )}
      </nav>
    </header>
  );
}

/* ---- Styles ---- */
const wrap = { maxWidth: 1100, margin: "0 auto", padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between" };
const logo = { textDecoration: "none", color: "#fdf5e6", fontWeight: 700 };
const nav = { display: "flex", gap: 12, alignItems: "center" };
const link = { textDecoration: "none", color: "#fdf5e6" };
const btnLink = { border: "none", background: "transparent", color: "#fdf5e6", cursor: "pointer" };
const btnPrimary = { border: "1px solid #e11d2e", background: "#e11d2e", color: "#fdf5e6", borderRadius: 8, padding: "8px 12px", cursor: "pointer" };
