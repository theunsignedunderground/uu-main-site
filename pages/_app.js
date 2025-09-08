// pages/_app.js
import { ClerkProvider } from "@clerk/nextjs";
import Header from "../components/Header";

export default function App({ Component, pageProps }) {
  return (
    <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <Header />
      <Component {...pageProps} />
    </ClerkProvider>
  );
}
