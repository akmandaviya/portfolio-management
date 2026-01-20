function parseDate(d) {
  const [dd, mm, yyyy] = d.split("-");
  return new Date(`${yyyy}-${mm}-${dd}`);
}

export default function ReturnsTable({ data }) {
  const sorted = [...data].sort(
    (a, b) => parseDate(a.date) - parseDate(b.date)
  );

  const latest = sorted[sorted.length - 1];
  const latestDate = parseDate(latest.date);

  function getPastNAV(days) {
    const target = new Date(latestDate);
    target.setDate(target.getDate() - days);

    for (let i = sorted.length - 1; i >= 0; i--) {
      if (parseDate(sorted[i].date) <= target) {
        return sorted[i].nav;
      }
    }
    return null;
  }

  function calcReturn(days) {
    const pastNav = getPastNAV(days);
    if (!pastNav) return "-";
    return (((latest.nav - pastNav) / pastNav) * 100).toFixed(1) + "%";
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>1M</th>
          <th>3M</th>
          <th>6M</th>
          <th>1Y</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Focused</td>
          <td>{calcReturn(30)}</td>
          <td>{calcReturn(90)}</td>
          <td>{calcReturn(180)}</td>
          <td>{calcReturn(365)}</td>
        </tr>
      </tbody>
    </table>
  );
}
