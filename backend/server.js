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

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server started on http://localhost:${PORT}`);
});
