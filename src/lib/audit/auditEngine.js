function generateAudit(tool, plan, seats) {
  let recommendation = "";
  let savings = 0;

  // Basic rule engine
  if (tool === "ChatGPT" && plan === "Team" && seats <= 3) {
    recommendation = "Switch to ChatGPT Plus";
    savings = 20;
  } 
  else if (tool === "Cursor" && plan === "Business" && seats === 1) {
    recommendation = "Switch to Cursor Pro";
    savings = 25;
  } 
  else if (tool === "Claude" && plan === "Team" && seats === 1) {
    recommendation = "Switch to Claude Pro";
    savings = 18;
  } 
  else if (tool === "GitHub Copilot" && plan === "Business" && seats <= 3) {
    recommendation = "Switch to Copilot Individual";
    savings = 10;
  } 
  else {
    recommendation = "Cost efficient setup recommended";
    savings = 5;
  }

  return {
    recommendation,
    savings,
    annualSavings: savings * 12,
    reason:
      seats <= 3
        ? "Team plans are usually unnecessary for small teams."
        : "You may be overpaying for current usage pattern."
  };
}

module.exports = { generateAudit };