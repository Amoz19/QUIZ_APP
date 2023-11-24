const QuizModel = require("../models/QuizModel.js");

const getQuiz = async (req, res) => {
  const quiz = await QuizModel.find({});
  res.status(200).json(quiz);
};

const addQuiz = async (req, res) => {
  const quiz = new QuizModel(req.body);
  await quiz.save();
  res.status(201).json(quiz);
};

module.exports = { getQuiz, addQuiz };
