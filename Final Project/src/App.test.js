// App.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders LoginPage initially', () => {
    render(<App />);

    // Check for elements specific to the LoginPage
    expect(screen.getByPlaceholderText('Enter your email')).toBeInTheDocument();
  });

  test('renders MainPage after login', () => {
    render(<App />);

    // Simulate filling the login form and submitting
    fireEvent.change(screen.getByPlaceholderText('Enter your email'), { target: { value: 'test@example.com' } });
    fireEvent.change(screen.getByPlaceholderText('Enter your password'), { target: { value: 'password' } });
    fireEvent.click(screen.getByText('Login'));

    
  });

  // Additional tests for other routes and conditions
});
