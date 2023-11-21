import React, { useState } from "react";
import useFetch from "../hooks/useFetch";

const apiEndpoint = import.meta.env.VITE_API_URL;

const Quizs = () => {
  const { quizz, loading } = useFetch(apiEndpoint);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [activeQuestion, setActiveQuestion] = useState(false);
  const [score, setScore] = useState(0);

  function handleClick(answer) {
    setActiveQuestion(answer);
  }

  function handleNext() {
    setActiveQuestion(false);

    if (currentQuestion <= quizz.length)
      setCurrentQuestion(currentQuestion + 1);

    if (activeQuestion.isCorrect) {
      setScore(score + 1);
    }
  }

  if (currentQuestion === quizz.length) {
    return <h1>Hello</h1>;
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-zinc-900 w-2/6 rounded-md px-8 py-4">
        <div className="flex justify-end">
          <button className="bg-green-500 px-4 py-2 rounded ">
            {currentQuestion + 1}/{quizz.length}
          </button>
        </div>

        <div>
          <h3 className="text-xl text-green-500">
            {quizz[currentQuestion]?.question}
          </h3>
          {quizz[currentQuestion]?.answers.map((answer, i) => (
            <button
              key={answer._id}
              className={`flex w-full rounded my-4 px-4 py-2 ${
                activeQuestion === answer
                  ? answer.isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-white"
              }`}
              disabled={activeQuestion}
              onClick={() => handleClick(answer)}
            >
              <p className="mr-4">{i + 1}</p>
              <p>{answer.answer}</p>
            </button>
          ))}
        </div>
        <div className="flex justify-between my-4  items-center">
          <button
            className="bg-green-500 px-4 py-2 rounded disabled:opacity-60"
            disabled={!activeQuestion}
            onClick={handleNext}
          >
            Next
          </button>
          {activeQuestion ? (
            <p
              className={`${
                activeQuestion.isCorrect ? "text-green-500" : "text-red-500"
              }`}
            >
              {activeQuestion.isCorrect ? "Correct" : "Next Time!"}
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Quizs;
