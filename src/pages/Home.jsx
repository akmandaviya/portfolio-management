const blogs = [
  {
    category: "PORTFOLIO UPDATE",
    title: "CM Fixed Income: Exiting Banking & PSU",
    desc: "We are increasing the duration of our Fixed Income portfolio to reflect current macro conditions.",
    date: "Apr 18, 2024"
  },
  {
    category: "STOCK STORY",
    title: "Craftsman Automation: Poised for Growth Amid Headwinds",
    desc: "Craftsman Automation continues to deliver strong performance despite temporary challenges.",
    date: "Apr 05, 2024"
  },
  {
    category: "INVESTING",
    title: "The Focused Way of Investing: Four Quadrant Strategy",
    desc: "A deep dive into Capitalmind’s focused investment philosophy and FY24 performance.",
    date: "Apr 03, 2024"
  },
  {
    category: "MACRO",
    title: "A Small CAD for India, Yet Again",
    desc: "India’s current account deficit remains under control, reflecting macro stability.",
    date: "Mar 27, 2024"
  },
  {
    category: "STOCK STORY",
    title: "Poonawalla Fincorp: One Right Step at a Time",
    desc: "How steady execution is helping Poonawalla Fincorp transform its business model.",
    date: "Mar 25, 2024"
  },
  {
    category: "PORTFOLIO UPDATE",
    title: "Reducing Allocation to Smallcaps & Increasing Cash",
    desc: "Portfolio adjustments made to manage volatility and improve risk-adjusted returns.",
    date: "Mar 18, 2024"
  }
];

export default function Home() {
  return (
    <div className="container">
      <h2>Latest Posts</h2>

      <div className="blog-grid">
        {blogs.map((b, i) => (
          <div className="blog-card" key={i}>
            <p className="blog-cat">{b.category}</p>
            <h3>{b.title}</h3>
            <p className="blog-desc">{b.desc}</p>
            <p className="blog-date">{b.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
