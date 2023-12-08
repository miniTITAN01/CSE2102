import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import getQuestionsForTopic from './Question';
import Result from './Result';

import './QuizStyle.css'; // Make sure this file has the necessary styles

const QuizContainer = ({ topic }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [answers, setAnswers] = useState(Array(5).fill(null));
    const [showResult, setShowResult] = useState(false);
    const questions = getQuestionsForTopic(topic);
    const navigate = useNavigate();
    const [timeLeft, setTimeLeft] = useState(30);

    useEffect(() => {
        let timer;
        if (!showResult && timeLeft > 0) {
            timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
        } else if (timeLeft === 0) {
            // Auto navigate to the next question or show results
            if (currentQuestionIndex < questions.length - 1) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setTimeLeft(30); // Reset the timer for the next question
            } else {
                setShowResult(true); // No more questions left, show the result
            }
        }
        return () => clearTimeout(timer);
    }, [timeLeft, currentQuestionIndex, questions.length, showResult]);

    const handleOptionSelect = (option) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestionIndex] = option;
        setAnswers(newAnswers);
    };

    const handleReset = () => {
        setAnswers(Array(5).fill(null));
        setCurrentQuestionIndex(0);
        setShowResult(false);
        setTimeLeft(30); // Reset the timer
        navigate('/topic-selection');
    };

    const handleNextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setTimeLeft(30); // Reset the timer for the next question
        } else {
            setShowResult(true); // No more questions left, show the result
        }
    };

    if (showResult) {
        return <Result answers={answers} questions={questions} onReset={handleReset} />;
    }

    if (!questions.length) return <div>No questions available.</div>;

    const currentQuestion = questions[currentQuestionIndex];

    return (
        <div className="page-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/quizBack.jpg)` }} >

            <div className="quiz-container" >

                Question {currentQuestionIndex + 1}/{questions.length}
                <div className="question-text">{currentQuestion.questionText}</div>
            </div>

            <div className="options-container">
                {currentQuestion.options.map((option, index) => (
                    <button key={index} 
                        onClick={() => handleOptionSelect(option)} 
                        className={`option ${answers[currentQuestionIndex] === option ? 'selected' : ''}`}>
                        {option}
                    </button>
                ))}
            </div>

            <div className="timer">Time left: {timeLeft} seconds</div>

            <div className="navigation-buttons">
                <button  onClick={handleNextQuestion}>Next</button>
                <button  onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
};

export default QuizContainer;
