import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import MainPage from './components/main/MainPage';
import TopicSelection from './components/main/TopicSelection';
import QuizContainer from './components/quiz/QuizContainer';
import ContactPage from './components/contact/ContactPage';

import getQuestionsForTopic from './components/quiz/Question';

const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedTopic, setSelectedTopic] = useState(null);
    const [questions, setQuestions] = useState([]);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true);
    };

    const handleStartQuiz = () => {
        setSelectedTopic(null);
    };

    const handleSelectTopic = (topic) => {
        setSelectedTopic(topic);
        setQuestions(getQuestionsForTopic(topic));
    };

    return (
        <Router>
            {isLoggedIn && <Header />} 
            <Routes>
                <Route path="/login" element={!isLoggedIn ? <LoginPage onLoginSuccess={handleLoginSuccess} /> : <Navigate replace to="/main" />} />
                <Route path="/main" element={isLoggedIn ? <MainPage onStartQuiz={handleStartQuiz} onContact={() => {}} /> : <Navigate replace to="/login" />} />
                <Route path="/topic-selection" element={isLoggedIn ? <TopicSelection onSelectTopic={handleSelectTopic} /> : <Navigate replace to="/login" />} />
                <Route path="/quiz" element={isLoggedIn && selectedTopic ? <QuizContainer topic={selectedTopic} /> : <Navigate replace to="/main" />} />
                <Route path="/quiz" element={isLoggedIn && selectedTopic ? <QuizContainer topic={selectedTopic} questions={questions} /> : <Navigate replace to="/main" />} />
                <Route path="/contact" element={isLoggedIn ? <ContactPage /> : <Navigate replace to="/login" />} />
                <Route path="/" element={<Navigate replace to="/login" />} />

            </Routes>
            {isLoggedIn && <Footer />}
        </Router>
    );
};


export default App;
