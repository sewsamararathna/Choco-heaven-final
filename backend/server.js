const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

/* ================= MIDDLEWARE ================= */
app.use(cors());
app.use(express.json());

/* ================= TEST ROUTE ================= */
app.get("/", (req, res) => {
  res.send("Backend Running 🚀");
});

/* ================= ADMIN LOGIN ================= */
app.post("/admin/login", (req, res) => {
  console.log("🔥 LOGIN REQUEST:", req.body);

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).send({
      message: "Email and Password required"
    });
  }

  const sql = "SELECT * FROM admins WHERE email = ? AND password = ?";

  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.log("DB ERROR:", err);
      return res.status(500).send({
        message: "Database Error",
        error: err
      });
    }

    if (result.length > 0) {
      return res.send({
        message: "Login Success",
        admin: result[0]
      });
    } else {
      return res.send({
        message: "Invalid Credentials"
      });
    }
  });
});

/* ================= CAKES ================= */
app.get("/cakes", (req, res) => {
  db.query("SELECT * FROM cakes", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: "Error fetching cakes" });
    }
    res.send(result);
  });
});

/* ================= USERS ================= */
app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: "Error fetching users" });
    }
    res.send(result);
  });
});

/* ================= ORDERS ================= */
app.get("/orders", (req, res) => {
  db.query("SELECT * FROM orders", (err, result) => {
    if (err) {
      console.log(err);
      return res.status(500).send({ message: "Error fetching orders" });
    }
    res.send(result);
  });
});

/* ================= START SERVER ================= */
app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});