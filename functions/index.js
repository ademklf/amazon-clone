const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { app } = require("firebase-admin");
const stripe = require("stripe")(
  "sk_test_51MZwklFZ41MYcaKxV73jis08Ty0djNt0JoQd037gsLTPpJlFgxg9o5Ote1pctRgOZKFKxnDxQQ83nBxQOt6ALgfq00sI1imjGG"
);

// API

// - App config

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// - Listen command
exports.api = functions.https.onRequest(app);
