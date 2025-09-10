// pages/_app.js
import { ClerkProvider } from "@clerk/nextjs";
import { useRouter } from "next/router";
import Header from "../components/Header";
import { MemberGate } from "../components/MemberGate";

const PROTECTED_PREFIXES = [
  "/artist-manager",
  "/artist-dashboard",
  "/setlists",
  "/release-toolkit",
  "/press-tools",
  // add more paths if you create new protected pages
];

export default function App({ Component, pageProps }) {
  const { pathname } = useRouter();

  const needsGate = PROTECTED_PREFIXES.some(
    (prefix) => pathname === prefix || pathname.startsWith(prefix + "/")
  );

  const content = <Component {...pageProps} />;

  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Header />
      {needsGate ? <MemberGate>{content}</MemberGate> : content}
    </ClerkProvider>
  );
}
