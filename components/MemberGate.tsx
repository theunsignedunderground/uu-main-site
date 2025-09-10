// components/MemberGate.tsx
import { ReactNode, useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import { allowMemberAccess, devUnlocked } from "@/lib/membership";

export function MemberGate({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) {
  const { isLoaded, user } = useUser();
  const [ok, setOk] = useState<boolean>(devUnlocked()); // optimistic in dev

  useEffect(() => {
    if (!isLoaded) return;
    setOk(allowMemberAccess(user as any));
  }, [isLoaded, user]);

  if (!isLoaded) return null; // or a small spinner
  if (!ok) return <>{fallback ?? <DefaultPaywall />}</>;
  return <>{children}</>;
}

function DefaultPaywall() {
  if (devUnlocked()) {
    // Extra loud in dev so you know the lock is bypassed
    return (
      <div style={{ padding: 16, border: "1px dashed #aaa", borderRadius: 8, margin: "16px 0" }}>
        <strong>DEV UNLOCK ACTIVE</strong> — Paywall bypassed (set <code>NEXT_PUBLIC_UU_DEV_UNLOCK=0</code> to re-enable).
      </div>
    );
  }
  return (
    <div style={{ padding: 24, maxWidth: 720, margin: "40px auto", textAlign: "center" }}>
      <h1>Unlock Artist Manager</h1>
      <p>This tool is available to Unsigned Underground members.</p>
      <a href="/pricing" style={{ textDecoration: "none" }}>View Membership Options</a>
    </div>
  );
}
