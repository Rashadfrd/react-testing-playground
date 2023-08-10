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

  //Keyboard events
  it("should render the element correctly", async () => {
    const user = userEvent.setup();

    render(<UserActions />);

    await user.keyboard("{Tab}{Enter}");

    const element = screen.getByRole("heading");

    expect(element).toHaveTextContent(1);
  });
});
