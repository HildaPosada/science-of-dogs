import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the private launch experience without public navigation', () => {
  render(<App />);
  expect(screen.getByRole('heading', { name: /coming soon/i })).toBeInTheDocument();
  expect(screen.getByText(/mapping and rewiring neural pathways/i)).toBeInTheDocument();
  expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
});
