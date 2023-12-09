import React from 'react';
import { render, fireEvent, act, waitFor } from '@testing-library/react';
import TopicSelection from './TopicSelection';
import { BrowserRouter as Router } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('TopicSelection', () => {
  const mockOnSelectTopic = jest.fn();

  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('renders TopicSelection component', () => {
    render(<Router><TopicSelection onSelectTopic={mockOnSelectTopic} /></Router>);
  });

  test('selecting a topic calls onSelectTopic with correct topic', () => {
    const { getByText } = render(<Router><TopicSelection onSelectTopic={mockOnSelectTopic} /></Router>);
    
    const topicButton = getByText('Language');
    act(() => { fireEvent.click(topicButton); });
    expect(mockOnSelectTopic).toHaveBeenCalledWith('Language');
  });

  test('shows message and navigates after delay', async () => {
    const { getByText } = render(<Router><TopicSelection onSelectTopic={mockOnSelectTopic} /></Router>);
    
    const topicButton = getByText('Math');
    act(() => { fireEvent.click(topicButton); });
    
    expect(getByText(/The quiz will start in 3 seconds, get ready!!/i)).toBeInTheDocument();
    
    // Fast-forward until all timers have been executed
    act(() => {
      jest.runAllTimers();
    });

    // Wait for the expected outcome
    await act(async () => {
        // Fast-forward until all timers have been executed
        jest.runAllTimers();
      });
  
  });
});
