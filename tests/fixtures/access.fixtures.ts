/**
 * Access-check fixtures
 *
 * Two contract shapes:
 *   1. Access granted  – hasAccess: true, matchedRoles populated
 *   2. Access denied   – hasAccess: false, reason explains why
 *
 * These pin the exact response shape the AccessStatusCard and useAccessCheck
 * hook expect from the SDK.  If the SDK renames a field (e.g. `matchedRoles`
 * → `grantedRoles`) these fixtures will surface the breakage immediately.
 */

// ---------------------------------------------------------------------------
// Base type
// ---------------------------------------------------------------------------

export type AccessCheckFixture = {
  hasAccess: boolean;
  reason?: string;
  matchedRoles: string[];
  requiredRoles: string[];
};

export type AccessCheckParams = {
  walletAddress: string;
  guildId: string;
  resourceId: string;
};

// ---------------------------------------------------------------------------
// Access granted
// ---------------------------------------------------------------------------

export const ACCESS_GRANTED_FIXTURE: AccessCheckFixture = {
  hasAccess: true,
  reason: "Wallet holds required role.",
  matchedRoles: ["Member", "Contributor"],
  requiredRoles: ["Member"],
};

/** Granted with multiple required roles (access policy: "any") */
export const ACCESS_GRANTED_MULTI_ROLE_FIXTURE: AccessCheckFixture = {
  hasAccess: true,
  reason: "At least one required role was matched.",
  matchedRoles: ["Admin"],
  requiredRoles: ["Member", "Admin"],
};

// ---------------------------------------------------------------------------
// Access denied
// ---------------------------------------------------------------------------

export const ACCESS_DENIED_FIXTURE: AccessCheckFixture = {
  hasAccess: false,
  reason: "Wallet does not hold any required roles.",
  matchedRoles: [],
  requiredRoles: ["Member"],
};

/** Denied – no roles configured on the resource yet */
export const ACCESS_DENIED_NO_REQUIREMENTS_FIXTURE: AccessCheckFixture = {
  hasAccess: false,
  reason: "No role requirements are configured for this resource.",
  matchedRoles: [],
  requiredRoles: [],
};

// ---------------------------------------------------------------------------
// Test input params
// ---------------------------------------------------------------------------

export const ACCESS_CHECK_PARAMS: AccessCheckParams = {
  walletAddress: "0x1234567890123456789012345678901234567890",
  guildId: "guild_abc",
  resourceId: "secret-channel",
};

export const ACCESS_CHECK_PARAMS_INCOMPLETE: AccessCheckParams = {
  walletAddress: "",
  guildId: "",
  resourceId: "",
};
