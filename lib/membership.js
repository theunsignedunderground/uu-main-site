// lib/membership.js

// Simple toggle: set NEXT_PUBLIC_UU_DEV_UNLOCK=1 to bypass all paywalls.
export function devUnlocked() {
  // On client & server, Next replaces NEXT_PUBLIC_* at build time.
  return process.env.NEXT_PUBLIC_UU_DEV_UNLOCK === "1";
}

function normalizeMembership(user) {
  if (!user) return false;

  // These guards avoid optional-chaining in case your build target is strict.
  const pm = user.publicMetadata ? user.publicMetadata : {};
  const pr = user.privateMetadata ? user.privateMetadata : {};
  const um = user.unsafeMetadata ? user.unsafeMetadata : {};

  // Treat any of these strings as "active".
  var ACTIVE_VALUES = ["active", "annual", "paid", "pro", "yes", "true"];

  var candidates = [
    pm.membership, pm.plan, pm.uuPlan, pm.uu_membership,
    pr.membership, pr.plan, pr.uuPlan, pr.uu_membership,
    um.membership, um.plan, um.uuPlan, um.uu_membership
  ].filter(function (v) { return v !== undefined && v !== null; })
   .map(function (v) { return String(v).toLowerCase(); });

  var stringOk = candidates.some(function (v) { return ACTIVE_VALUES.includes(v); });
  var boolOk = (pm.isMember === true) || (pr.isMember === true) || (um.isMember === true);

  var status =
    (pm.stripe_status || pr.stripe_status || um.stripe_status || "");
  status = String(status).toLowerCase();
  var stripeOk = ["active", "trialing", "past_due"].includes(status);

  return stringOk || boolOk || stripeOk;
}

/**
 * Returns true if the user should see member tools.
 * Dev unlock overrides everything.
 */
export function allowMemberAccess(user) {
  if (devUnlocked()) return true;
  return normalizeMembership(user);
}
