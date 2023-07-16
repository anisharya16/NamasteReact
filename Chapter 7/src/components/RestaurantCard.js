import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({ name, cloudinaryImageId, cuisines, area }) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="food_image" />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{area}</h4>
    </div>
  );
};

export default RestaurantCard;
