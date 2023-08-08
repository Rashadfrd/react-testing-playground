import { getByText, render, screen } from "@testing-library/react";
import Test from "./Test";

// Learning about queries

describe("Queries", () => {
  // Getby

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

  it("should render an element with the altText of img", () => {
    render(<Test />);

    const element = screen.getByAltText("img");

    expect(element).toBeInTheDocument();
  });

  it("should render an element with the title of delete", () => {
    render(<Test />);

    const element = screen.getByTitle("delete");

    expect(element).toBeInTheDocument();
  });

  // This is only recommended for cases where you cant match by role or text or it doesnt make sense (e.g. the text is dynamic).

  it("should render an element with the testId of custom-element", () => {
    render(<Test />);

    const element = screen.getByTestId("custom-element");

    expect(element).toBeInTheDocument();
  });

  // Multiple Queries

  it("should render multiple button elements correctly", () => {
    render(<Test />);

    let elements = screen.getAllByRole("button");

    expect(elements).toHaveLength(3);
  });

  // Text matching

  it("should render text element correctly", () => {
    render(<Test />);

    //First way of doing it is using regex :

    // let element = screen.getByText(/something useful/i)

    // It also accepts an object as the final argument that can contain options that affect the precision of string matching:

    let element = screen.getByText("something useful", {
      exact: false,
    });

    expect(element).toBeInTheDocument();
  });

  // Queryby

  it("should check the exampleText prop", () => {
    render(<Test exampleText="something" />);

    const element = screen.getByText("something");

    expect(element).toBeInTheDocument();

    const emptyElement = screen.queryByText(/nothing is here/i);

    expect(emptyElement).not.toBeInTheDocument();
  });

  // Find by

  it("should ", async () => {
    render(<Test />);

    const element = await screen.findByText(/memmedaga/i);

    expect(element).toBeInTheDocument();

    // 'FindBy' queries in React Testing Library are designed to work with asynchronous actions, such as waiting for an element to appear in the DOM due to state changes, effects, or other asynchronous processes. In this scenario, where we are updating the state with a delay using useEffect, findBy queries can indeed handle both values: 'Agakerim' and 'Memmedaga'.

    const elementChanged = await screen.findByText(/agakerim/i);

    expect(elementChanged).toBeInTheDocument();
  });
});
