import { render, screen } from "@testing-library/react";
import Test from "./Test";

// Learning about queries

describe("Queries", () => {
  it("should render a button with the label Second btn", () => {
    render(<Test />);

    // const firstElement = screen.getByRole('button')

    //In case there are multiple elements with the same role we can use :

    const secondElement = screen.getByRole("button", {
      name: "Second btn",
    });

    expect(secondElement).toBeInTheDocument();
  });

  it("should render an element with the label Username", () => {
    render(<Test />);

    const element = screen.getByLabelText("Username");

    expect(element).toBeInTheDocument();
  });

  it("should render an element with the placeholder text Username here...", () => {
    render(<Test />);

    const element = screen.getByPlaceholderText("Username here...");

    expect(element).toBeInTheDocument();
  });
  it("should render an element with the placeholder text Username here...", () => {
    render(<Test />);

    const element = screen.getByPlaceholderText("Username here...");

    expect(element).toBeInTheDocument();
  });
  it("should render an element with the text First btn", () => {
    render(<Test />);

    const element = screen.getByText("First btn");

    expect(element).toBeInTheDocument();
  });
  it("should render an element with the value of Akif", () => {
    render(<Test />);

    const element = screen.getByDisplayValue("Akif");

    expect(element).toBeInTheDocument();
  });
});
