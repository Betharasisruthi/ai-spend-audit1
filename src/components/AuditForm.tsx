"use client";

import { useState } from "react";
import { generateAudit } from "@/lib/audit/auditEngine";

type AuditResult = {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
};

export default function AuditForm() {
  const [tool, setTool] = useState<string>("ChatGPT");
  const [plan, setPlan] = useState<string>("Team");
  const [seats, setSeats] = useState<number>(2);

  const [result, setResult] = useState<AuditResult | null>(null);
  const [shareId, setShareId] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const audit = generateAudit(tool, plan, seats);

    setResult(audit);

    // generate ID
    const id = Date.now().toString();

    // save to localStorage
    const existing = JSON.parse(
      localStorage.getItem("audits") || "{}"
    );

    existing[id] = audit;

    localStorage.setItem("audits", JSON.stringify(existing));

    // set shareable id
    setShareId(id);

    // update URL without reload
    window.history.pushState({}, "", `/audit/${id}`);
  }

  return (
    <div className="mt-10 max-w-2xl bg-gray-900 border border-gray-800 rounded-2xl p-8 shadow-2xl">

      <form onSubmit={handleSubmit} className="space-y-6">

        {/* TOOL */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Tool
          </label>

          <select
            value={tool}
            onChange={(e) => setTool(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
          >
            <option value="ChatGPT">ChatGPT</option>
            <option value="Claude">Claude</option>
            <option value="Cursor">Cursor</option>
            <option value="GitHub Copilot">GitHub Copilot</option>
            <option value="Gemini">Gemini</option>
            <option value="OpenAI API">OpenAI API</option>
            <option value="Anthropic API">Anthropic API</option>
            <option value="Windsurf">Windsurf</option>
          </select>
        </div>

        {/* PLAN */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Plan
          </label>

          <select
            value={plan}
            onChange={(e) => setPlan(e.target.value)}
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
          >
            <option value="Team">Team</option>
            <option value="Business">Business</option>
            <option value="Plus">Plus</option>
            <option value="Pro">Pro</option>
            <option value="Ultra">Ultra</option>
          </select>
        </div>

        {/* SEATS */}
        <div>
          <label className="block mb-2 text-sm text-gray-400">
            Number of Seats
          </label>

          <input
            type="number"
            value={seats}
            onChange={(e) => setSeats(Number(e.target.value))}
            className="w-full p-4 rounded-xl bg-black border border-gray-700 text-white"
          />
        </div>

        {/* BUTTON */}
        <button
          type="submit"
          className="w-full bg-white text-black px-6 py-4 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Audit My Spend
        </button>
      </form>

      {/* RESULT */}
      {result && (
        <div className="mt-10 border border-green-500/20 bg-green-500/10 p-8 rounded-2xl">

          <h2 className="text-3xl font-bold">
            Audit Result
          </h2>

          <div className="mt-6 space-y-4">

            <div>
              <p className="text-gray-400 text-sm">
                Recommendation
              </p>
              <p className="text-xl font-semibold">
                {result.recommendation}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Monthly Savings
              </p>
              <p className="text-4xl font-bold text-green-400">
                ${result.savings}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Annual Savings
              </p>
              <p className="text-2xl font-semibold">
                ${result.annualSavings}
              </p>
            </div>

            <div>
              <p className="text-gray-400 text-sm">
                Why?
              </p>
              <p className="text-gray-200">
                {result.reason}
              </p>
            </div>

            {/* ✅ CLICKABLE SHARE LINK */}
            {shareId && (
              <a
                href={`/audit/${shareId}`}
                target="_blank"
                className="text-sm text-blue-400 underline pt-4 inline-block"
              >
                Open Shareable Audit Link
              </a>
            )}

          </div>
        </div>
      )}
    </div>
  );
}