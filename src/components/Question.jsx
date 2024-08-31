import React from "react";

const Question = ({ question, onAnswerSelected, timeLeft }) => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-400 flex flex-col p-10 rounded-md drop-shadow-2xl">
        <span
          className={`mb-4 text-2xl font-bold ${
            timeLeft > 10 ? "text-green-600" : "text-red-600"
          }`}
        >
          TimeLeft: {timeLeft}
        </span>
        <h1 className="text-3xl font-semibold font-serif ">
          {question.question}
        </h1>

        {question.options.map((item, i) => (
          <div className="mt-3 flex flex-col" key={i}>
            <button
              className="bg-white text-xl rounded p-2 font-semibold hover:bg-black hover:text-white"
              onClick={() => onAnswerSelected(item)}
            >
              {item}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Question;
