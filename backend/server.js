import express from "express";
import dotenv from "dotenv";
import router from "./routes/QuizRoute.js";
import mongoose from "mongoose";

const app = express();
dotenv.config();

const PORT = process.env.PORT;
const mongoCLient = process.env.DB_URL;

app.use(express.json());

app.use("/api/quiz", router);

mongoose
  .connect(mongoCLient)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));
