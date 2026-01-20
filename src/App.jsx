import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

export default function App() {
  return (
    <BrowserRouter>
      <div className="layout">
        {/* Sidebar */}
        <aside className="sidebar">
          <h2 className="logo">Portfolio Management</h2>
         <nav className="side-nav">
    <Link to="/">Home</Link>
    <Link to="/portfolio">Portfolio</Link>
  </nav>
        </aside>

        {/* Main content */}
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/portfolio" element={<Portfolio />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}
