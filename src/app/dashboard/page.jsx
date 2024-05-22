import LineChart from "@/Components/line-chart";
import React from "react";

function BarChart() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Bar Chart</h1>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Dashboard</h1>
      <LineChart />
      <BarChart />
    </div>
  );
}
