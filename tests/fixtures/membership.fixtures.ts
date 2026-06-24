/**
 * Membership fixtures
 *
 * Covers the two states the app cares about:
 *   1. Active member   – membership card shows "Active Member"
 *   2. Not a member    – membership card shows "Not a Member"
 *
 * The getUserRoles shape is also covered so useMembership's secondary query
 * has a deterministic contract to test against.
 */

// ---------------------------------------------------------------------------
// Base types
// ---------------------------------------------------------------------------

export type MembershipFixture = {
  walletAddress: string;
  guildId: string;
  isActive: boolean;
  joinedAt?: string; // ISO date – optional, not all SDK versions include it
};

export type UserRoleFixture = {
  id: string;
  name: string;
  guildId: string;
  walletAddress: string;
};

// ---------------------------------------------------------------------------
// Active membership
// ---------------------------------------------------------------------------

export const MEMBERSHIP_ACTIVE_FIXTURE: MembershipFixture = {
  walletAddress: "0x1234567890123456789012345678901234567890",
  guildId: "guild_abc",
  isActive: true,
  joinedAt: "2024-01-15T10:30:00.000Z",
};

export const USER_ROLES_FIXTURE: UserRoleFixture[] = [
  {
    id: "role_1",
    name: "Member",
    guildId: "guild_abc",
    walletAddress: "0x1234567890123456789012345678901234567890",
  },
  {
    id: "role_2",
    name: "Contributor",
    guildId: "guild_abc",
    walletAddress: "0x1234567890123456789012345678901234567890",
  },
];

// ---------------------------------------------------------------------------
// Not a member – SDK returns a membership object with isActive: false
// (does NOT throw; the screen guards on isActive)
// ---------------------------------------------------------------------------

export const MEMBERSHIP_INACTIVE_FIXTURE: MembershipFixture = {
  walletAddress: "0xDeadBeef0000000000000000000000000000cafe",
  guildId: "guild_abc",
  isActive: false,
};

export const USER_ROLES_EMPTY_FIXTURE: UserRoleFixture[] = [];

// ---------------------------------------------------------------------------
// Wallet address used consistently across membership tests
// ---------------------------------------------------------------------------

export const TEST_WALLET_ADDRESS = "0x1234567890123456789012345678901234567890";
export const NON_MEMBER_WALLET_ADDRESS = "0xDeadBeef0000000000000000000000000000cafe";
