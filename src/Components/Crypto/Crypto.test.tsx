import React from 'react';
import { render, screen } from '@testing-library/react';
import Crypto from './Crypto'; 

test('renders learn react link', () => {
  render(<Crypto />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});