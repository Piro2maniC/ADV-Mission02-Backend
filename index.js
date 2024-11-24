const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const util = require("util");
const msRest = require("@azure/ms-rest-js");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Create the connection pool to the database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  connectTimeout: 20000,
});

// Test database connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log("Database connection established successfully.");
    connection.release();
  }
});

// Promisified query
const query = util.promisify(pool.query).bind(pool);

// API 01
app.get("/api/car/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const results = await query(
      `SELECT anual_cost as "Anual Premium", monthly_cost as "Monthly Premium" FROM insurance_quote WHERE name = ?;`,
      [name]
    );
    if (results.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(results[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving insurance quote", error });
  }
});

// API 02
app.get("/api/car/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const results = await query(
      `SELECT anual_cost as "Anual Premium", monthly_cost as "Monthly Premium" FROM insurance_quote WHERE name = ?;`,
      [name]
    );
    if (results.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(results[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving insurance quote", error });
  }
});

// API 03
app.get("/api/car/:name", async (req, res) => {
  const { name } = req.params;
  try {
    const results = await query(
      `SELECT anual_cost as "Anual Premium", monthly_cost as "Monthly Premium" FROM insurance_quote WHERE name = ?;`,
      [name]
    );
    if (results.length === 0) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(results[0]);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error retrieving insurance quote", error });
  }
});

// Set up port
const PORT = process.env.SERVER_PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});
