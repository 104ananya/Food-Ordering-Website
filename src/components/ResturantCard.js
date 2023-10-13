import { CDN_URL } from "../utils/constant";

const styleCard = {
  backgroundColor: "#fafafa",
};

// const RestaurantCard = (props) => {
//   const { resData } = props;

//   // destructuring
//   const { imgID, resName, dish, type, rating } = resData;

//   return (
//     <div className="res-card" style={styleCard}>
//       <img src={CDN_URL + imgID} alt="res-img" />
//       <h3>{resName}</h3>
//       <h4>{dish}</h4>
//       <p>{type}</p>
//       <p>{rating} Stars</p>
//     </div>
//   );
// };

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructuring
  const { cloudinaryImageId, name, cuisines, areaName, costForTwo, avgRating } =
    resData?.info;

  return (
    <div className="res-card" style={styleCard}>
      <img src={CDN_URL + cloudinaryImageId} alt="res-img" />
      <h3>{name}</h3>
      <h4>{cuisines[0]}</h4>
      <p>{areaName}</p>
      <p>{costForTwo}</p>
      <p>{avgRating} Stars</p>
    </div>
  );
};

export default RestaurantCard;
