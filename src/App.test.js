import { render, screen } from "@testing-library/react";
import App from "./App";

// First test

test("should render App component without crashing", () => {
  render(<App />);

  const element = screen.getByText(/modern frontend testing/i);

  expect(element).toBeInTheDocument();
});
