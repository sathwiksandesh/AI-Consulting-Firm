"use client";
import { useState } from "react";

export default function Home() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const handleConsult = async () => {
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:8000/consult", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ problem: input }),
      });

      const data = await res.json();
      setResult(data.result);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }

    setLoading(false);
  };
{loading && (
  <p className="mt-4 text-blue-400 animate-pulse">
    🤖 AI is analyzing your problem...
  </p>
)}
 return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">🚀 AI Consulting Firm</h1>

      <textarea
        className="w-full mt-6 p-3 border rounded"
        rows={4}
        placeholder="Enter your business problem..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button
        onClick={handleConsult}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded"
      >
        {loading ? "Consulting..." : "Consult"}
      </button>

      {result && (
  <div className="mt-10 space-y-6">

    {/* Final Report Title */}
    <h2 className="text-3xl font-bold text-blue-400 flex items-center gap-2">
      📊 Final Report
    </h2>

    {/* Main Card */}
    <div className="bg-gray-900 border border-gray-700 rounded-xl p-6 shadow-lg space-y-6">

      {/* Executive Summary */}
      <div>
        <h3 className="text-xl font-semibold text-yellow-400 mb-2">
          🧾 Executive Summary
        </h3>
        <p className="text-gray-300 leading-relaxed">
          {result.final_report}
        </p>
      </div>

      {/* Divider */}
      <hr className="border-gray-700" />

      {/* Research */}
      <div>
        <h3 className="text-xl font-semibold text-green-400 mb-2">
          🔍 Research Insights
        </h3>
        <p className="text-gray-300 whitespace-pre-wrap">
          {result.research}
        </p>
      </div>

      {/* Strategy */}
      <div>
        <h3 className="text-xl font-semibold text-purple-400 mb-2">
          🧠 Strategy Plan
        </h3>
        <p className="text-gray-300 whitespace-pre-wrap">
          {result.strategy}
        </p>
      </div>

      {/* Finance */}
      <div>
        <h3 className="text-xl font-semibold text-red-400 mb-2">
          💰 Financial Analysis
        </h3>
        <p className="text-gray-300 whitespace-pre-wrap">
          {result.finance}
        </p>
      </div>

    </div>
  </div>
)}
    </div>
  );
}