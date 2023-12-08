import React, { useState } from 'react';
import './LoginPage.css';

const LoginPage = ({ onLoginSuccess }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simple email and password validation
        if (!email || !password) {
            setError('Email and password are required');
            return;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            setError('Invalid email format');
            return;
        }
        setError('');
        onLoginSuccess(); // Assuming this will update the app state to show the main page
    };

    return (
        <div className="login-container" style={{ backgroundImage: `url('/huskyLoginBackground.jpeg')` }}>
            <div className="login-form">
                <img src="/huskyLogin.jpeg" alt="Husky Logo" className="husky-logo"/>
                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" />
                    </div>
                    <button type="submit" className="login-button">Login</button>
                    {error && <p className="error">{error}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
