import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders AppName', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/ClubFinder/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Footer', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Copyright/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders SearchBar', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});