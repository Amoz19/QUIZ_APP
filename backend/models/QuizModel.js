import mongoose from "mongoose";

const QuizSchema = new mongoose.Schema({
  question: {
    type: String,
    require: true,
  },
  answers: [
    {
      answer: {
        type: String,
        require: true,
      },
      isCorrect: {
        type: Boolean,
        require: true,
      },
    },
  ],
});

const QuizModel = mongoose.model("quiz", QuizSchema);
export default QuizModel;
