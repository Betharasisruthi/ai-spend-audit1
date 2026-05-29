const path = require("path");
const { generateAudit } = require(path.resolve(__dirname, "../lib/audit/auditEngine"));

function test(name, fn) {
  try {
    fn();
    console.log("PASS:", name);
  } catch (e) {
    console.log("FAIL:", name);
    console.error(e.message);
    process.exitCode = 1;
  }
}

test("ChatGPT Team small org should suggest Plus", () => {
  const res = generateAudit("ChatGPT", "Team", 2);
  if (!res.recommendation.includes("Plus")) {
    throw new Error("Expected Plus recommendation");
  }
});

test("Cursor Business single user should suggest Pro", () => {
  const res = generateAudit("Cursor", "Business", 1);
  if (!res.recommendation.includes("Pro")) {
    throw new Error("Expected Pro recommendation");
  }
});

test("Claude Team single user should suggest Pro", () => {
  const res = generateAudit("Claude", "Team", 1);
  if (!res.recommendation.includes("Pro")) {
    throw new Error("Expected Pro recommendation");
  }
});

test("Copilot Business small team should suggest Individual", () => {
  const res = generateAudit("GitHub Copilot", "Business", 2);
  if (!res.recommendation.includes("Individual")) {
    throw new Error("Expected Individual recommendation");
  }
});

test("Unknown setup should return cost efficient", () => {
  const res = generateAudit("Unknown", "Free", 1);
  if (!res.recommendation.includes("cost efficient")) {
    throw new Error("Expected cost efficient message");
  }
});