import { render, screen, createEvent, fireEvent } from '@testing-library/react';
import App from './App';

test('there should be a button on my page', () => {
  render(<App />);
  expect(screen.getByText("enormous")).toBeInTheDocument();
  expect(screen.getAllByRole("button")).toHaveLength(1);
});


test('adding button function', ()=> {
  render(<App />);
  const button = screen.getByText("enormous")
  const buttClick = createEvent.click(button, {showpic: true})
  fireEvent(button, buttClick)
  expect(screen.getByAltText("hi")).toBeInTheDocument(); 
}); 