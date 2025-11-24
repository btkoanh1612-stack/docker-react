// File: src/App.test.js

import { render, screen } from '@testing-library/react';
import App from './App';

// Đây là test đơn giản mà react-scripts dùng để kiểm tra App.js
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});