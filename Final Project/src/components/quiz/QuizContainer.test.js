import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import QuizContainer from './QuizContainer';
import getQuestionsForTopic from './Question';

jest.mock('./Question');

describe('QuizContainer', () => {
  beforeEach(() => {
    getQuestionsForTopic.mockReturnValue([
      {
        questionText: 'Sample Question 1',
        options: ['Option 1', 'Option 2', 'Option 3'],
        correctAnswer: 'Option 1',
      },
      // ... other mock questions
    ]);
  });

  const mockTopic = 'Math';

  test('handles option selection and question navigation', () => {
    render(
        <Router>
          <QuizContainer topic={mockTopic} />
        </Router>
      );
  });

  // Other tests as needed
});
