// components/MemberGate.js
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { allowMemberAccess, devUnlocked } from "../lib/membership";

export function MemberGate({ children, fallback }) {
  const { isLoaded, user } = useUser();
  const [ok, setOk] = useState(devUnlocked()); // optimistic in dev

  useEffect(() => {
    if (!isLoaded) return;
    setOk(allowMemberAccess(user));
  }, [isLoaded, user]);

  if (!isLoaded) return null; // could swap for a spinner
  if (!ok) return <>{fallback ?? <DefaultPaywall />}</>;
  return <>{children}</>;
}

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
        <strong>DEV UNLOCK ACTIVE</strong> — Paywall bypassed.  
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
      <h1>Unlock Artist Manager</h1>
      <p>This tool is available to Unsigned Underground members.</p>
      <a href="/pricing" style={{ textDecoration: "none" }}>
        View Membership Options
      </a>
    </div>
  );
}
