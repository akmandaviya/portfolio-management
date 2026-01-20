import * as XLSX from "xlsx";

export async function loadExcelData() {
  try {
    const res = await fetch("/data.xlsx");
    const buffer = await res.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });

    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const raw = XLSX.utils.sheet_to_json(sheet, { defval: null });

    // Find header row index (row with NAV Date)
    const headerIndex = raw.findIndex(
      r => r["Historical Mutual Fund NAV of Quant Active Fund Gr"] === "NAV Date"
    );

    if (headerIndex === -1) {
      console.error("Header row not found");
      return [];
    }

    // Real data starts after header row
    const rows = raw.slice(headerIndex + 1);

    const processed = rows.map(r => {
      const dateStr = r["Historical Mutual Fund NAV of Quant Active Fund Gr"];
      const navVal = r["__EMPTY"];

      return {
        date: dateStr,
        nav: Number(navVal)
      };
    }).filter(d => d.date && !isNaN(d.nav));

    return processed.reverse();
  } catch (e) {
    console.error("Excel parse error:", e);
    return [];
  }
}
