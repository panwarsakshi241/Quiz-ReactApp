import React from "react";
import quizLogo from "../../assets/quiz-logo.png";

function Header() {
  return (
    <div>
      <header>
        <img src={quizLogo} alt="React Logo" />
        <h1>React Quiz</h1>
      </header>
    </div>
  );
}

export default Header;
