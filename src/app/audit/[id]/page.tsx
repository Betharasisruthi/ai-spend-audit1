"use client";

import { useEffect, useState } from "react";

type AuditResult = {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
  email?: string | null;
};

export default function AuditPage() {
  const [data, setData] = useState<AuditResult | null>(null);

  useEffect(() => {
    // get ID from URL manually (CLIENT SAFE way)
    const id = window.location.pathname.split("/").pop();

    if (!id) return;

    const stored = localStorage.getItem("audits");

    if (!stored) return;

    const audits = JSON.parse(stored);

    setData(audits?.[id] || null);
  }, []);

  if (!data) {
    return (
      <div className="p-10 text-white">
        <h1 className="text-2xl font-bold">Audit Not Found</h1>
        <p className="text-gray-400 mt-2">
          This link is invalid or missing data.
        </p>
      </div>
    );
  }

  return (
    <div className="p-10 max-w-2xl mx-auto text-white">
      <h1 className="text-3xl font-bold">Shared Audit Result</h1>

      <div className="mt-8 space-y-6">
        <div>
          <p className="text-gray-400 text-sm">Recommendation</p>
          <p className="text-xl font-semibold">{data.recommendation}</p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Monthly Savings</p>
          <p className="text-4xl font-bold text-green-400">
            ${data.savings}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Annual Savings</p>
          <p className="text-2xl font-semibold">
            ${data.annualSavings}
          </p>
        </div>

        <div>
          <p className="text-gray-400 text-sm">Why?</p>
          <p className="text-gray-200">{data.reason}</p>
        </div>
      </div>
    </div>
  );
}