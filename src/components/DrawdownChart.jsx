import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer } from "recharts";

export default function DrawdownChart({ data }) {
  let peak = data[0].nav;
  const dd = data.map(d => {
    if (d.nav > peak) peak = d.nav;
    return {
      date: d.date,
      drawdown: ((d.nav - peak) / peak) * 100
    };
  });

  return (
    <ResponsiveContainer width="100%" height={380}>
      <AreaChart data={dd}>
        <XAxis dataKey="date" hide />
        <YAxis />
        <Area
          type="monotone"
          dataKey="drawdown"
          fill="#fee2e2"
          stroke="#dc2626"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
