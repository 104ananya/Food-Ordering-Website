// import resList from "../utils/mockdata";
// import restaurants from "../utils/swiggydata";
import RestaurantCard from "./ResturantCard";
import { useEffect, useState } from "react";

const Body = () => {
  // State Variable
  const [List, setList] = useState([]);

  // normal JS Variable
  // let list = [];
  // list = ["ABC"]

  // USE EFFECT HOOK
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    // console.log(json);

    // OPTIONAL CHAINING
    setList(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (List.length === 0) {
    return <h1>Loading....</h1>;
  }

  return (
    <div className="body">
      <div className="Filter">
        <button
          className="filter-btn"
          onClick={() => {
            // filter logic
            // update the list of resturants
            const filteredList = List.filter((res) => res.info.avgRating > 4);
            setList(filteredList);
            console.log(filteredList);
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
