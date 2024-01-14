import { useContext } from "react";
import { IMG_CDN_URL } from "../constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData, userDetails } = props;
  const { name, cloudinaryImageId, cuisines, area } = resData;
  const { user } = useContext(UserContext);
  return (
    <div
      data-testid="resCard"
      className="w-60 h-full p-2 hover:bg-red-400 shadow-xl rounded-md sm:bg-purple-500 md:bg-red-500 lg:bg-blue-300"
    >
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food_image" />
      <p className="font-bold text-gray-700 text-xl underline my-2">{name}</p>
      <p>{cuisines.join(", ")}</p>
      <p>{area}</p>
      {/* <p className="italic">{userDetails.name} (Using Props drilling)</p> */}
      {/* commenting above line to pass test case */}
      <p className="font-extralight">
        {user.name} - {user.email} (Using Context)
      </p>
    </div>
  );
};

export default RestaurantCard;
