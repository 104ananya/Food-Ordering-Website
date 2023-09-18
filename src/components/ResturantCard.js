import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#fafafa",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructuring
  const { imgID, resName, dish, type, rating } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img src={CDN_URL + imgID} alt="res-img" />
      <h3>{resName}</h3>
      <h4>{dish}</h4>
      <p>{type}</p>
      <p>{rating} Stars</p>
    </div>
  );
};

export default RestaurantCard;
