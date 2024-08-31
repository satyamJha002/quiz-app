import React from "react";
import StartScreen from "./components/StartScreen";
import { Route, Routes, useNavigate } from "react-router-dom";
import Quizz from "./components/Quizz";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gradient-to-t from-slate-700 to-white min-h-screen">
      <Routes>
        <Route
          path="/"
          element={<StartScreen onStart={() => navigate("/quiz")} />}
        />
        <Route path="/quiz" element={<Quizz />} />
      </Routes>
    </div>
  );
};

export default App;
