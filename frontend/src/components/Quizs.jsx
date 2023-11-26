import { useState } from "react";
import useFetch from "../hooks/useFetch";
import Loading from "./Loading";

const apiUrl = import.meta.env.VITE_API_URL;

const Quiz = () => {
  const { quizz, loading } = useFetch(apiUrl);
  const [activeQuiz, setActiveQuiz] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [result, setResult] = useState(0);

  const handleClick = (element) => {
    setIsActive(element);
  };

  const handleActiveQuiz = () => {
    setIsActive(false);
    if (isActive.isCorrect === true) {
      setResult(result + 1);
    }
    if (quizz.length > activeQuiz) {
      setActiveQuiz(activeQuiz + 1);
    }
  };

  const handleReset = () => {
    setActiveQuiz(0);
    setResult(0);
  };

  if (loading) {
    return <Loading />;
  }

  if (quizz.length === activeQuiz) {
    return (
      <div className="flex justify-center items-center h-screen text-white">
        <div className="flex flex-col items-center bg-zinc-900  mx-2 w-full lg:w-2/6 rounded-md px-8 py-4">
          <p className="text-2xl text-green-600 font-black">Congratulations!</p>
          <p className="py-8 text-xl">
            You got {result}/{quizz.length}.
          </p>
          <button
            onClick={handleReset}
            className="bg-black px-8 py-2 rounded-3xl"
          >
            Test again
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <div className="bg-zinc-900  w-full mx-3 lg:w-2/6 rounded-md px-8 py-4">
          <div className="flex justify-end">
            <button className="bg-green-500 px-4 py-2 rounded ">
              {activeQuiz + 1}/{quizz.length}
            </button>
          </div>

          <div>
            <h3 className="text-xl text-green-500">
              {quizz.length && quizz[activeQuiz].question}
            </h3>
            {quizz.length &&
              quizz[activeQuiz].answers.map((result, i) => (
                <button
                  key={result._id}
                  className={`flex w-full rounded my-4 px-4 py-2 ${
                    isActive === result
                      ? result.isCorrect
                        ? "bg-green-300"
                        : "bg-red-300"
                      : "bg-white"
                  }`}
                  onClick={(e) => handleClick(result)}
                  disabled={isActive}
                >
                  <p className="mr-4">{i + 1}</p>
                  <p>{result.answer}</p>
                </button>
              ))}
          </div>
          <div className="flex justify-between my-4  items-center">
            <button
              className="bg-green-500 px-4 py-2 rounded disabled:pointer-events-none5 disabled:opacity-40"
              disabled={!isActive}
              onClick={handleActiveQuiz}
            >
              Next
            </button>
            <p className="">
              {isActive !== false ? (
                isActive.isCorrect === true ? (
                  <span className="text-green-500">True</span>
                ) : (
                  <span className="text-red-500">False</span>
                )
              ) : null}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Quiz;
