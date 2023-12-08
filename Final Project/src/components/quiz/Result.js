import React from 'react';
import './QuizStyle.css';

const Result = ({ answers, questions, onReset }) => {
  // Calculate the total score
  const totalScore = answers.reduce((score, answer, index) => {
    if (answer === questions[index].correctAnswer) {
      return score + 1;
    }
    return score;
  }, 0);

  return (
    <div className="page-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/quizBack.jpg)` }}>
      <div className="quiz-container">
        <div className="question-text">Quiz Results</div>
        <div className="result-details">
          <div className="result-summary">
            <p>Total Score: {totalScore}/{questions.length}</p>
          </div>
          {questions.map((question, index) => (
            <div key={index} className={`option ${answers[index] === question.correctAnswer ? 'correct' : 'incorrect'}`}>
              <p>Question {index + 1}: {question.questionText}</p>
              <p>Your answer: {answers[index]}</p>
              <p>Correct answer: {question.correctAnswer}</p>
            </div>
          ))}
        </div>
        <div className="navigation-buttons">
          <button onClick={onReset}>Try again</button>
        </div>
      </div>
    </div>
  );
};

export default Result;
