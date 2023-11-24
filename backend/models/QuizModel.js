const mongoose = require("mongoose");

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

module.exports = mongoose.model("quiz", QuizSchema);
