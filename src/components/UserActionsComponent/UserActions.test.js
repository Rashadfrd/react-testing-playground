import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import UserActions from "./UserActions";

//Learning about User Actions

describe("User Actions", () => {
  // Mouse/Pointer events
  it("should render the element correctly", async () => {
    const user = userEvent.setup();

    render(<UserActions />);

    await user.pointer({
      keys: "[MouseLeft]",
      target: screen.getByRole("button", { name: "Increment" }),
    });

    const element = screen.getByRole("heading");
    expect(element).toHaveTextContent(1);
  });

  // Keyboard events
  it("should render the element correctly", async () => {
    const user = userEvent.setup();

    render(<UserActions />);

    await user.keyboard("{Tab}{Enter}");

    const element = screen.getByRole("heading");

    expect(element).toHaveTextContent(1);
  });

  // CLipboard events
  it("should render the element correctly", async () => {
    const user = userEvent.setup();

    render(<UserActions />);

    await user.keyboard("{Tab}{Tab}{Enter}");

    const element = screen.getByRole("textbox");
    element.focus();

    await user.paste();

    expect(element).toHaveValue("Some text copied here...");
  });

  // Select/Deselect events
  it("should render the element correctly", async () => {
    const user = userEvent.setup();

    render(<UserActions />);

    const animals = screen.getByRole('listbox');

    await userEvent.selectOptions(animals,['giraffe','tiger'])

    expect(screen.getByRole('option', {name: 'Giraffe'}).selected).toBe(true)
    expect(screen.getByRole('option', {name: 'Cat'}).selected).toBe(false)
    expect(screen.getByRole('option', {name: 'Tiger'}).selected).toBe(true)

    await userEvent.deselectOptions(animals,['giraffe'])

    expect(screen.getByRole('option', {name: 'Giraffe'}).selected).toBe(false)

  });
});
