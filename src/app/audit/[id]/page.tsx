"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

type AuditResult = {
  recommendation: string;
  savings: number;
  annualSavings: number;
  reason: string;
};

export default function AuditPage() {
  const { id } = useParams();
  const [data, setData] = useState<AuditResult | null>(null);

  useEffect(() => {
    if (!id) return;

    const stored = localStorage.getItem("audits");
    if (!stored) return;

    const audits = JSON.parse(stored);
    setData(audits[id as string]);
  }, [id]);

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-950 text-gray-300">
        Loading audit...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100 px-6 py-10">
      
      {/* HEADER */}
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-100">
          Shared Audit Result
        </h1>

        <p className="text-gray-400 mt-2">
          AI Spend Optimization Report
        </p>

        {/* CARD */}
        <div className="mt-8 bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-6">

          {/* RECOMMENDATION */}
          <div>
            <p className="text-gray-400 text-sm">Recommendation</p>
            <p className="text-xl font-semibold text-gray-100">
              {data.recommendation}
            </p>
          </div>

          {/* MONTHLY */}
          <div>
            <p className="text-gray-400 text-sm">Monthly Savings</p>
            <p className="text-3xl font-bold text-green-400">
              ${data.savings}
            </p>
          </div>

          {/* ANNUAL */}
          <div>
            <p className="text-gray-400 text-sm">Annual Savings</p>
            <p className="text-2xl font-semibold text-green-300">
              ${data.annualSavings}
            </p>
          </div>

          {/* WHY */}
          <div>
            <p className="text-gray-400 text-sm">Why?</p>
            <p className="text-gray-200 leading-relaxed whitespace-pre-wrap break-words">
              {data.reason}
            </p>
          </div>

          {/* FOOTER NOTE */}
          <div className="pt-4 border-t border-gray-800">
            <p className="text-blue-400 text-sm">
              🔗 Shareable Audit Report
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}