
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL || "http://localhost:5173"
}));
app.use(express.json());

const pool = process.env.DATABASE_URL
  ? new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl: process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false
    })
  : null;

app.get("/", (req, res) => {
  res.json({ message: "Social Dashboard API is running!" });
});

app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

app.get("/api/db-health", async (req, res) => {
  if (!pool) {
    return res.status(503).json({
      status: "error",
      message: "DATABASE_URL is not configured"
    });
  }

  try {
    await pool.query("SELECT NOW()");
    res.json({ status: "OK", database: "connected" });
  } catch (error) {
    console.error("Database connection failed:", error.message);
    res.status(503).json({
      status: "error",
      database: "disconnected"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
