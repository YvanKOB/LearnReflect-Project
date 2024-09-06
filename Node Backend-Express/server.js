const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const Path = require('path');
const app = express();
const { resolve } = require("path");
require("dotenv").config({ Path: "./.env" });

console.log("Environment Variables:");
console.log("STRIPE_PUBLISHABLE_KEY:", process.env.STRIPE_PUBLISHABLE_KEY);
console.log("STRIPE_SECRET_KEY:", process.env.STRIPE_SECRET_KEY);

app.use(cors());
app.use(express.json());
app.options(cors());

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
  apiVersion: "2022-08-01",
});

const staticDir = resolve(__dirname, process.env.STATIC_DIR || '../Frontend/build');
app.use(express.static(staticDir));

app.get("/", (req, res) => {
  const indexPath = resolve(staticDir, "index.html");
  res.sendFile(indexPath);
});

app.get("/config", (req, res) => {
  console.log("Received request to /config");
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

app.post("/create-payment-intent", async (req, res) => {
  try {
    const { amount } = req.body;
    const paymentIntent = await stripe.paymentIntents.create({
      currency: "EUR",
      amount: amount,
      automatic_payment_methods: { enabled: true },
    });

    res.send({
      clientSecret: paymentIntent.client_secret,
    });
  } catch (e) {
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
}); 



const db = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: '',
    database: 'signup',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
});

app.post('/login', (req, res) => {
    const { name, email, password } = req.body;
    const sql = "SELECT * FROM login WHERE `name` = ? OR `email` = ?";
    db.query(sql, [name, email], (err, data) => {
        if (err) {
            console.error('Database Error:', err);
            return res.json("Error");
        }

        if (data.length === 0) {
            return res.json("No user exists");
        }

        const user = data[0];

        if(user.name != name){
            return res.json("Incorrect Username or Email")
        }

        if (user.password === password) {
            return res.json({ success: true, userId: user.id, username: user.name });
        } else {
            return res.json("Incorrect password");
        }

    });
});

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log("Listening on port", PORT);
});
