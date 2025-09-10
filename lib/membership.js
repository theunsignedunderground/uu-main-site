// lib/membership.js

export function devUnlocked() {
  // On = all tools unlocked (no paywall)
  return process.env.NEXT_PUBLIC_UU_DEV_UNLOCK === "1";
}

function normalizeMembership(user) {
  if (!user) return false;
  const pm = user.publicMetadata || {};
  const pr = user.privateMetadata || {};
  const um = user.unsafeMetadata || {};

  // Your “active” cases
  const ACTIVE_VALUES = ["active", "annual", "paid", "pro", "yes", "true"];
  const candidates = [
    pm.membership, pm.plan, pm.uuPlan, pm.uu_membership,
    pr.membership, pr.plan, pr.uuPlan, pr.uu_membership,
    um.membership, um.plan, um.uuPlan, um.uu_membership,
  ]
    .filter(Boolean)
    .map((v) => String(v).toLowerCase());

  const stringOk = candidates.some((v) => ACTIVE_VALUES.includes(v));
  const boolOk =
    pm.isMember === true || pr.isMember === true || um.isMember === true;
  const stripeOk = ["active", "trialing", "past_due"].includes(
    String(
      pm.stripe_status || pr.stripe_status || um.stripe_status || ""
    ).toLowerCase()
  );

  return stringOk || boolOk || stripeOk;
}

/
