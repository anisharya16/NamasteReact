import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import RestaurantCardMock from "../../mocks/RestaurantCardMock.json";
import UserDetailsMock from "../../mocks/userDetailsMock.json";
import "@testing-library/jest-dom";

describe("Restaurant Card Component test cases", () => {
  it("should render Restaurant card component with props data", () => {
    render(
      <RestaurantCard
        resData={RestaurantCardMock}
        userDetails={UserDetailsMock}
      />
    );

    const restaurantName = screen.getByText("Punjabi Angithi (Vegorama Group)");

    expect(restaurantName).toBeInTheDocument();
  });
});
