import React, { useEffect, useState } from "react";
import Question from "./Question";
import Result from "./Result";

const Quizz = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isTimerActive, setIsTimerActive] = useState(true);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Jupiter", "Saturn"],
      answer: "Mars",
    },
    {
      question: "What is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      options: [
        "William Shakespeare",
        "Mark Twain",
        "Charles Dickens",
        "Jane Austen",
      ],
      answer: "William Shakespeare",
    },
    {
      question: "Which element has the chemical symbol 'O'?",
      options: ["Oxygen", "Gold", "Osmium", "Oganesson"],
      answer: "Oxygen",
    },
    {
      question: `Inside which HTML 
               element do we put 
               the JavaScript?`,
      options: ["<javascript>", "<js>", "<script>", "<scripting>"],
      answer: "<script>",
    },

    {
      question: `How do you call a
               function named 
               myFunction?`,
      options: [
        "call myFunction()",
        "myFunction()",
        "call function myFunction",
        "Call.myFunction",
      ],
      answer: "myFunction()",
    },

    {
      question: `How does a for loop
               start?`,
      options: [
        "for (i = 0; i <= 5; i++)",
        "for (i = 0; i <= 5)",
        "for i = 1 to 5",
        " for (i <= 5; i++)",
      ],
      answer: "for (i = 0; i <= 5; i++)",
    },

    {
      question: `In JavaScript, which 
               of the following is 
               a logical operator?`,
      options: ["|", "&&", "%", "/"],
      answer: "&&",
    },

    {
      question: `A named element in a 
               JavaScript program that
               is used to store and 
               retrieve data is a _____.`,
      options: ["method", "assignment operator", "letiable", "string"],
      answer: "letiable",
    },
  ];

  useEffect(() => {
    let timer;

    if (isTimerActive && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      handleTimeUp();
    }

    return () => clearInterval(timer);
  }, [isTimerActive, timeLeft]);

  const handleTimeUp = () => {
    console.log("Time is UP!");
    handleAnswerSelected();
  };

  const handleAnswerSelected = (item) => {
    console.log(typeof item);
    console.log(typeof questions[currentQuestion].answer);
    console.log("Condition:", item === questions[currentQuestion].answer);

    if (item === questions[currentQuestion].answer) {
      setScore((prevScore) => prevScore + 1);
    }
    const nextQuestionIndex = currentQuestion + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestion(nextQuestionIndex);
      setTimeLeft(30);
      setIsTimerActive(true);
    } else {
      setIsTimerActive(false);
      setShowResult(true);
    }
  };

  return (
    <div>
      {showResult ? (
        <Result score={score} total={questions.length} />
      ) : (
        <Question
          timeLeft={timeLeft}
          question={questions[currentQuestion]}
          onAnswerSelected={handleAnswerSelected}
        />
      )}
    </div>
  );
};

export default Quizz;
