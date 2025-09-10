// components/MemberGate.js
import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { allowMemberAccess, devUnlocked } from "../lib/membership";

// Named export
export function MemberGate(props) {
  const { children, fallback } = props;
  const { isLoaded, user } = useUser();
  const [ok, setOk] = useState(devUnlocked()); // optimistic in dev to avoid flicker

  useEffect(function () {
    if (!isLoaded) return;
    try {
      setOk(allowMemberAccess(user));
    } catch (e) {
      // On any error, be safe and show fallback unless dev is unlocked
      setOk(devUnlocked());
    }
  }, [isLoaded, user]);

  if (!isLoaded) return null;

  if (!ok) {
    return (
      <>
        {fallback ? fallback : <DefaultPaywall />}
      </>
    );
  }

  return <>{children}</>;
}

// Also provide a default export in case you import it that way elsewhere
export default MemberGate;

function DefaultPaywall() {
  if (devUnlocked()) {
    // Loud in dev so you know it’s bypassed
    return (
      <div
        style={{
          padding: 16,
          border: "1px dashed #aaa",
          borderRadius: 8,
          margin: "16px 0",
        }}
      >
        <strong>DEV UNLOCK ACTIVE</strong> — Paywall bypassed.{" "}
        Set <code>NEXT_PUBLIC_UU_DEV_UNLOCK=0</code> to re-enable.
      </div>
    );
  }

  return (
    <div
      style={{
        padding: 24,
        maxWidth: 720,
        margin: "40px auto",
        textAlign: "center",
      }}
    >
      <h1>Unlock Artist Tools</h1>
      <p>These tools are available to Unsigned Underground members.</p>
      <a href="/pricing" style={{ textDecoration: "none" }}>
        View Membership Options
      </a>
    </div>
  );
}
