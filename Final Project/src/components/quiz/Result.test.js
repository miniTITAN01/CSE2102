// Result.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Result from './Result';

const mockQuestions = [
  {
    questionText: "What is 2 + 2?",
    correctAnswer: "4",
  },
  {
    questionText: "What is the capital of France?",
    correctAnswer: "Paris",
  },
];

const mockAnswers = ["4", "London"];

describe('Result', () => {
  test('displays the correct total score', () => {
    render(<Result questions={mockQuestions} answers={mockAnswers} onReset={() => {}} />);
    expect(screen.getByText("Total Score: 1/2")).toBeInTheDocument();
  });

  test('displays each question and marks correct and incorrect answers', () => {
    render(<Result questions={mockQuestions} answers={mockAnswers} onReset={() => {}} />);

    mockQuestions.forEach((question, index) => {
      expect(screen.getByText(`Question ${index + 1}: ${question.questionText}`)).toBeInTheDocument();
      expect(screen.getByText(`Your answer: ${mockAnswers[index]}`)).toBeInTheDocument();

      const resultClass = mockAnswers[index] === question.correctAnswer ? 'correct' : 'incorrect';
      const resultElement = screen.getByText(`Your answer: ${mockAnswers[index]}`).closest('div');
      expect(resultElement).toHaveClass(resultClass);
    });
  });

  test('calls onReset when the Try again button is clicked', () => {
    const mockOnReset = jest.fn();
    render(<Result questions={mockQuestions} answers={mockAnswers} onReset={mockOnReset} />);

    fireEvent.click(screen.getByText("Try again"));
    expect(mockOnReset).toHaveBeenCalled();
  });
});
