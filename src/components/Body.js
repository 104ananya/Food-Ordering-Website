import resList from "../utils/data";
import RestaurantCard from "./ResturantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
