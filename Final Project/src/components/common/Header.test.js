import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
}));

describe('Header', () => {
  test('navigates to main page when Quiz Main Page is clicked', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    fireEvent.click(screen.getByText('Quiz Main Page'));
    
  });

  test('navigates to contact page when Contact Us is clicked', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    fireEvent.click(screen.getByText('Contact Us'));
    
  });
});
