import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Campaigns from "./pages/Campaigns";
import Logs from "./pages/Logs";

function Root() {
  return (
    <BrowserRouter>
      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/" style={{ marginRight: "10px" }}>Customers</Link>
        <Link to="/campaigns" style={{ marginRight: "10px" }}>Campaigns</Link>
        <Link to="/logs">Logs</Link>
      </nav>

      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/campaigns" element={<Campaigns />} />
        <Route path="/logs" element={<Logs />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
