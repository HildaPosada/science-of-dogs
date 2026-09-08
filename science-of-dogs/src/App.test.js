import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the Science of Dogs experience and primary navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /behavior has a history/i })).toBeInTheDocument();
  expect(screen.getByRole('navigation', { name: /primary navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Research' })).toBeInTheDocument();
});
