const express = require("express");
const router = require("../routes/QuizRoute");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");

const app = express();

const allowCors = (fn) => async (req, res) => {
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }
  return await fn(req, res);
};

app.use(express.json());
app.use("/api/quiz", allowCors(router));
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

const mongoCLient = process.env.DB_URL;

mongoose
  .connect(mongoCLient)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

module.exports = app;
