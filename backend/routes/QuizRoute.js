const express = require("express");
const { getQuiz, addQuiz } = require("../controllers/QuizController.js");

const router = express.Router();

router.get("/", getQuiz);

router.post("/", addQuiz);

module.exports = router;
