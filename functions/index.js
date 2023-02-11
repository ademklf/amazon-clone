const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51MZwklFZ41MYcaKxV73jis08Ty0djNt0JoQd037gsLTPpJlFgxg9o5Ote1pctRgOZKFKxnDxQQ83nBxQOt6ALgfq00sI1imjGG"
);

// API

// - App config
const app = express();

// - Mddlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved for this amount >>>", total);

  const paymentIntent = await stripe.paymentIntent.create({
    amount: total, // submits of the currency
    currency: "usd",
  });

  //OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://127.0.0.1:5001/clone-cb015/us-central1/api
