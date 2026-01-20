import { useEffect, useState } from "react";
import { loadExcelData } from "../utils/excel";
import EquityCurveChart from "../components/EquityCurveChart";
import DrawdownChart from "../components/DrawdownChart";
import ReturnsTable from "../components/ReturnsTable";

export default function Portfolio() {
    const [data, setData] = useState([]);

    useEffect(() => {
       loadExcelData().then(d => {
    const sorted = d.sort((a, b) => new Date(a.date) - new Date(b.date));
    console.log("First:", sorted[0], "Last:", sorted.at(-1));
    setData(sorted);
  });
    }, []);

    if (!data.length) return <p>Loading...</p>;

    return (
        <div className="container">
            <p style={{ color: "#6b7280", fontSize: 20 }}>
                Data source: Historical NAV report
            </p>
            <h2>Trailing Returns</h2>
            <ReturnsTable data={data} />

            <div className="card">
                <h3>Equity curve</h3>
                <EquityCurveChart data={data} />
            </div>

            <div className="card">
                <DrawdownChart data={data} />
            </div>
        </div>
    );
}
