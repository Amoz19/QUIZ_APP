const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const router = require("../routes/QuizRoute");
const mongoose = require("mongoose");

require("dotenv").config();

const middlewares = require("./middlewares");

const app = express();

app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api/quiz", router);
const mongoCLient = process.env.DB_URL;

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

mongoose
  .connect(mongoCLient)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

module.exports = app;
