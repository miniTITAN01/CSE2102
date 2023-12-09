import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ContactPage from './ContactPage';

describe('ContactPage Component', () => {
  it('renders ContactPage correctly', () => {
    render(<ContactPage />);
    
    // Check if the ContactPage component renders without errors
    const contactPage = screen.getByTestId('contact-page');
    expect(contactPage).toBeInTheDocument();

    // Check if the form elements are rendered
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageTextarea = screen.getByPlaceholderText('Message');
    const submitButton = screen.getByText('Send');
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(messageTextarea).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  it('submits the form when the "Send" button is clicked', () => {
    render(<ContactPage />);
    
    // Mock the console.log method
    const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
    
    // Fill in the form fields
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const messageTextarea = screen.getByPlaceholderText('Message');
    fireEvent.change(nameInput, { target: { value: 'John' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageTextarea, { target: { value: 'Test message' } });
    
    // Submit the form
    const submitButton = screen.getByText('Send');
    fireEvent.click(submitButton);

    // Check if the form submission was triggered
    expect(consoleLogSpy).toHaveBeenCalledWith('Form submitted');

    // Restore the original console.log method
    consoleLogSpy.mockRestore();
  });
});
