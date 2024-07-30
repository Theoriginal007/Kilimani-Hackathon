import { render, screen } from '@testing-library/react';
import App from './App';

test('renders welcome message', () => {
  render(<App />);
  const linkElement = screen.getByText(/Welcome to the Monitoring Dashboard/i);
  expect(linkElement).toBeInTheDocument();
});
