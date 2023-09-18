import resList from "../utils/data";
import RestaurantCard from "./ResturantCard";
import { useState } from "react";

const Body = () => {
  // State Variable
  const [List, setList] = useState(resList);

  // normal JS Variable
  // let list = [];
  // list = ["ABC"]

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            // update the list of resturants
            const filteredList = List.filter((res) => res.rating > 4);
            setList(filteredList);
          }}
        >
          Top Rated
        </button>
      </div>
      <div className="res-container">
        {List.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
