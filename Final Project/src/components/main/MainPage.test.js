// MainPage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import MainPage from './MainPage';

// Mock the useNavigate hook
const mockedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'), // use actual for all non-hook parts
  useNavigate: () => mockedNavigate,
}));

describe('MainPage', () => {
  // Test if the component renders correctly
  test('renders MainPage component', () => {
    render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );
  });

  // Test if clicking on 'Quiz Bank' button navigates to '/topic-selection'
  test('navigates to topic selection on quiz bank button click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const quizBankButton = getByText(/Quiz Bank/i);
    fireEvent.click(quizBankButton);
    expect(mockedNavigate).toHaveBeenCalledWith('/topic-selection');
  });

  // Test if clicking on 'Contact Us' button navigates to '/contact'
  test('navigates to contact on contact us button click', () => {
    const { getByText } = render(
      <BrowserRouter>
        <MainPage />
      </BrowserRouter>
    );

    const contactUsButton = getByText(/Contact Us/i);
    fireEvent.click(contactUsButton);
    expect(mockedNavigate).toHaveBeenCalledWith('/contact');
  });
});
