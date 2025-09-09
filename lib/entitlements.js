// lib/entitlements.js

// Normalize any metadata shape to an array of plan strings
function normalizePlans(meta) {
  if (!meta) return [];
  const raw =
    meta.plans ??
    meta.plan ??
    meta.subscription ??
    meta.subscriptions ??
    null;

  if (!raw) return [];
  if (Array.isArray(raw)) return raw.map(String);
  return [String(raw)]; // handle single string or number
}

/**
 * Read plans from a Clerk user object.
 * You can store plans in publicMetadata or privateMetadata via your webhook later.
 */
export function getPlansFromUser(user) {
  const pub = normalizePlans(user?.publicMetadata || {});
  const priv = normalizePlans(user?.privateMetadata || {});
  // union (public takes priority)
  const set = new Set([...pub, ...priv]);
  return [...set];
}

/**
 * Entitlement gate with DEV bypass.
 * - DEV bypass when NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS="1"
 * - Otherwise, require overlap between user's plans and `requireAnyOf`
 */
export function hasEntitlement({ user, requireAnyOf = ["annual", "monthly", "fast_track"] }) {
  if (process.env.NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS === "1") return true;

  const plans = getPlansFromUser(user);
  return plans.some((p) => requireAnyOf.includes(String(p)));
}

/** Optional: expose whether bypass is currently active (for a subtle dev banner) */
export function devBypassActive() {
  return process.env.NEXT_PUBLIC_DEV_ENTITLEMENT_BYPASS === "1";
}
