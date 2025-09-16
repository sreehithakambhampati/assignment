const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("✅ Backend server is running!");
});

// Example API route
app.post("/customers", (req, res) => {
  const customer = req.body; // data sent from frontend
  console.log("New customer:", customer);
  res.json({ message: "Customer added successfully", data: customer });
});

let communicationLog = [];

// Save campaign
app.post("/campaigns", (req, res) => {
  const { condition } = req.body;
  // Dummy: send to 3 customers
  const results = [
    { customer: "Alice", status: Math.random() > 0.1 ? "SENT" : "FAILED" },
    { customer: "Bob", status: Math.random() > 0.1 ? "SENT" : "FAILED" },
    { customer: "Charlie", status: Math.random() > 0.1 ? "SENT" : "FAILED" },
  ];
  communicationLog.push(...results);
  res.json({ message: "Campaign saved", results });
});

// Get logs
app.get("/communication-log", (req, res) => {
  res.json(communicationLog);
});


// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
