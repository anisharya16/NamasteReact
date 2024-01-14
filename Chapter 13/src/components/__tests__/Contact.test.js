import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// For all html elements roles
// https://www.w3.org/TR/html-aria/

describe("Contact Us component test cases", () => {
  test("Should load Contact component", () => {
    render(<Contact />);

    const heading = screen.getByText("Contact Us");
    expect(heading).toBeInTheDocument();
  });

  test("Should load button inside Contact component", () => {
    render(<Contact />);

    // const button = screen.getByRole("button");
    const button = screen.getByRole("button", { name: "Submit" });
    expect(button).toBeInTheDocument();
  });

  test("Should load input text Name inside Contact component", () => {
    render(<Contact />);

    const input_yourName = screen.getByPlaceholderText("Your Name");
    expect(input_yourName).toBeInTheDocument();
  });

  test("Should load 2 input boxex inside Contact component", () => {
    //render
    render(<Contact />);

    // quering
    const inputBoxes = screen.getAllByRole("textbox");

    // console.log(inputBoxes);
    // console.log(inputBoxes[0]);
    // console.log(inputBoxes.length);

    // Assert
    expect(inputBoxes.length).toBe(2);
  });
});
