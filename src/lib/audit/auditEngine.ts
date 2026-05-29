type AuditResult = {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
};

export function generateAudit(
  tool: string,
  plan: string,
  seats: number
): AuditResult {

  // ChatGPT logic
  if (
    tool === "ChatGPT" &&
    plan === "Team" &&
    seats <= 2
  ) {
    return {
      recommendation: "Switch to ChatGPT Plus",
      savings: 20,
      annualSavings: 240,
      reason:
        "Team plans are usually unnecessary for teams under 3 users.",
    };
  }

  // Cursor logic
  if (
    tool === "Cursor" &&
    plan === "Business" &&
    seats === 1
  ) {
    return {
      recommendation: "Switch to Cursor Pro",
      savings: 20,
      annualSavings: 240,
      reason:
        "Business collaboration features are unused for solo developers.",
    };
  }

  return {
    recommendation: "Current setup looks cost efficient",
    savings: 0,
    annualSavings: 0,
    reason:
      "No meaningful savings opportunity detected.",
  };
}
