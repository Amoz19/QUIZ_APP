import QuizModel from "../models/QuizModel.js";

export const getQuiz = async (req, res) => {
  const quiz = await QuizModel.find({});
  res.status(200).json(quiz);
};

export const addQuiz = async (req, res) => {
  const quiz = new QuizModel(req.body);
  await quiz.save();
  res.status(201).json(quiz);
};
