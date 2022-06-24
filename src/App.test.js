import { render, screen } from '@testing-library/react';
import App from './App';

test('there should be a button on my page', () => {
  render(<App />);
  expect(screen.getByText("enormous")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(1);
});