import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import RestaurantMenu from "../RestaurantMenu";
import store from "../../utils/store";
import MOCKDATA from "../../mocks/mockRestaurantMenu.json";
import Header from "../Header";
import Cart from "../Cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCKDATA),
  })
);

it("should load Restaurant Menu component", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
          <RestaurantMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  // Expecting all items from menu list
  const foodItems = screen.getAllByTestId("foodItem");
  expect(foodItems.length).toBe(20);

  // Expecting Cart to be zero
  const cartBeforeClick = screen.getByText("Cart(0)");
  expect(cartBeforeClick).toBeInTheDocument();

  // Expecting Add button to be clicked
  const addButtons = screen.getAllByRole("button", { name: "Add" });
  fireEvent.click(addButtons[0]);

  // Expecting cart to have one item
  const cartAfterClick = screen.getByText("Cart(1)");
  expect(cartAfterClick).toBeInTheDocument();

  // Adding one more item and expecting cart to have 2 items
  fireEvent.click(addButtons[1]);
  expect(screen.getByText("Cart(2)"));

  //Clear cart and expect it to be empty

  const clearCartButtom = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartButtom);

  const emptyCart = screen.getByText("Total items in cart: 0");
  expect(emptyCart).toBeInTheDocument();
});
