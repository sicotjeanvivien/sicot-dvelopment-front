import React from 'react';
import { render, screen } from '@testing-library/react';
import Project from './Protject';

test('renders learn react link', () => {
  render(<Project />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});