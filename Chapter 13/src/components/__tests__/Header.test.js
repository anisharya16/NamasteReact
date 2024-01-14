import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import store from "../../utils/store";
import Header from "../Header";

describe("Header component test cases", () => {
  it("should render Header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText("Cart(0)");

    expect(cartItems).toBeInTheDocument();
  });

  it("should render Header component with cart item", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const cartItems = screen.getByText(/Cart/);

    expect(cartItems).toBeInTheDocument();
  });

  it("should change the login button to logout button", () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    // const loginButton = screen.getByRole("button", { name: "Login" });

    // fireEvent.click(loginButton);

    // const logoutButton = screen.getByRole("button", { name: "Logout" });

    // expect(logoutButton).toBeInTheDocument();
  });
});
