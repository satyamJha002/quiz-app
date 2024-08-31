import React from "react";

const Result = ({ score, total }) => {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="bg-gray-400 flex flex-col p-10 rounded-md drop-shadow-2xl">
        <h2 className="text-3xl font-semibold ">
          Your Score: {score}/{total}
        </h2>
        <button
          onClick={() => window.location.reload(false)}
          className="bg-white p-2 mt-4 text-xl font-semibold rounded-md hover:bg-black hover:text-white drop-shadow"
        >
          Restart Quizz
        </button>
      </div>
    </div>
  );
};

export default Result;
