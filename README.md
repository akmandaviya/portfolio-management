📌 Project Overview:

This project is a React-based portfolio management dashboard built as part of the frontend technical assignment.
It demonstrates the ability to build a data-driven UI, replicate a given design, and present financial statistics clearly using charts and tables.

The application consists of two main pages:
1) Home Page – Displays a collection of blogs.
2) Portfolio Page – Displays portfolio statistics such as:
   Month-on-month trading returns for each year
   Equity curve chart
   Drawdown chart

All statistics are generated using the provided Excel data source and visualized using charts and structured components.


🧰 Tech Stack:

React (Vite)
JavaScript
Chart Library (Recharts)
CSS (for UI replication)
Excel parsing (xlsx)
React Router (for multi-page navigation)

📁 Project Structure:

portfolio-management/
│
├── public/
│   └── data.xlsx                # Excel data source
│
├── src/
│   ├── assets/                   # Static assets
│   │
│   ├── components/
│   │   ├── DrawdownChart.jsx
│   │   ├── EquityCurveChart.jsx
│   │   └── ReturnsTable.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   └── Portfolio.jsx
│   │
│   ├── utils/
│   │   └── excel.js              # Excel parsing & data transformation
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── App.css
│   └── index.css
│
├── index.html
├── vite.config.js
├── package.json
└── README.md

📊 Data Source:

The project uses public/data.xlsx as the data source
Data is parsed in src/utils/excel.js
Calculated metrics include:
-> Monthly returns
-> Yearly aggregation
-> Equity curve
-> Drawdown values

🚀 How to Run the Project Locally:

1. Clone the repository:
   git clone <your-repository-url>
   cd portfolio-management
2. Install dependencies:
   npm install
3. Start the development server:
   npm run dev
The application will be available at:
👉 http://localhost:5173


👨‍💻 Author

AbdulKarim Mandaviya
Software Engineeer (Frontend)
📧 abdulmandaviya@gmail.com
📱 +91 72020253570
