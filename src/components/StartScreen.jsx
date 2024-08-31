import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col min-h-screen justify-center items-center">
      <h1 className="text-5xl font-semibold font-serif drop-shadow-lg">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-black from-slate-700 animate-pulse">
          Welcome to Quizz
        </span>
      </h1>
      <button
        className="bg-black mt-3 text-white py-2 px-4 rounded-sm font-semibold drop-shadow-lg hover:bg-white hover:text-black hover:font-semibold hover:drop-shadow-lg"
        onClick={onStart}
      >
        Start Quizz
      </button>
    </div>
  );
};

export default StartScreen;
