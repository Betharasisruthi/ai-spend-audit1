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

  // ChatGPT
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

  // Cursor
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

  // Claude
  if (
    tool === "Claude" &&
    plan === "Team" &&
    seats === 1
  ) {
    return {
      recommendation: "Switch to Claude Pro",
      savings: 25,
      annualSavings: 300,
      reason:
        "Claude Team features are unnecessary for solo usage.",
    };
  }

  // GitHub Copilot
  if (
    tool === "GitHub Copilot" &&
    plan === "Business" &&
    seats <= 2
  ) {
    return {
      recommendation: "Switch to Copilot Individual",
      savings: 18,
      annualSavings: 216,
      reason:
        "Business admin controls are not needed for small teams.",
    };
  }

  // Gemini
  if (
    tool === "Gemini" &&
    plan === "Ultra" &&
    seats === 1
  ) {
    return {
      recommendation: "Switch to Gemini Pro",
      savings: 10,
      annualSavings: 120,
      reason:
        "Gemini Ultra is excessive for standard individual workflows.",
    };
  }

  // OpenAI API
  if (
    tool === "OpenAI API" &&
    seats <= 2
  ) {
    return {
      recommendation: "Optimize API usage and caching",
      savings: 35,
      annualSavings: 420,
      reason:
        "Small teams often overpay due to unoptimized token usage.",
    };
  }

  // Anthropic API
  if (
    tool === "Anthropic API" &&
    seats <= 2
  ) {
    return {
      recommendation: "Reduce unused API consumption",
      savings: 30,
      annualSavings: 360,
      reason:
        "API costs can often be lowered through batching and caching.",
    };
  }

  // Windsurf
  if (
    tool === "Windsurf" &&
    plan === "Team" &&
    seats === 1
  ) {
    return {
      recommendation: "Switch to Windsurf Pro",
      savings: 15,
      annualSavings: 180,
      reason:
        "Team collaboration features are unnecessary for solo workflows.",
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