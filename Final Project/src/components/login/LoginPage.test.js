import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import LoginPage from './LoginPage';

describe('LoginPage Component', () => {
  it('renders the login form correctly', () => {
    render(<LoginPage onLoginSuccess={() => {}} />);
    
    // Check if the login form elements are rendered
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(loginButton).toBeInTheDocument();
  });

  it('handles form submission correctly', () => {
    const mockOnLoginSuccess = jest.fn();
    render(<LoginPage onLoginSuccess={mockOnLoginSuccess} />);
    
    const emailInput = screen.getByLabelText('Email');
    const passwordInput = screen.getByLabelText('Password');
    const loginButton = screen.getByText('Login');

    // Simulate user input
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Simulate form submission
    fireEvent.click(loginButton);

    // Verify that the onLoginSuccess callback was called
    expect(mockOnLoginSuccess).toHaveBeenCalled();
  });

  it('displays an error message for invalid input', () => {
    render(<LoginPage onLoginSuccess={() => {}} />);
    
    const loginButton = screen.getByText('Login');

    // Simulate form submission without entering email and password
    fireEvent.click(loginButton);

    // Verify that an error message is displayed
    const errorElement = screen.getByText('Email and password are required');
    expect(errorElement).toBeInTheDocument();
  });
});
