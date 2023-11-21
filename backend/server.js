import express from "express";
import dotenv from "dotenv";
import router from "./routes/QuizRoute.js";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
dotenv.config();
app.use("/api/quiz", router);

const PORT = process.env.PORT;
const mongoCLient = process.env.DB_URL;

app.use(express.json());

mongoose
  .connect(mongoCLient)
  .then(() => console.log("connected"))
  .catch((err) => console.log(err.message));

app.listen(PORT, () => console.log(`server is listening on ${PORT}`));

export default server;
