// Footer.test.js
import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer'; // Make sure this path is correct

describe('Footer', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Copyright © 2023 Quizz App. All rights reserved.')).toBeInTheDocument();
    // Replace "some text from your footer" with actual text from your Footer component.
  });
});
