// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          src="https://i.pinimg.com/originals/b1/fc/bb/b1fcbbfd4fb8116c714ef352bb39bbaf.jpg"
          alt="logo"
          className="logo"
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>My Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#fafafa",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  // destructuring
  const { imgID, resName, dish, type, rating } = resData;

  return (
    <div className="res-card" style={styleCard}>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          imgID
        }
        alt="res-img"
      />
      <h3>{resName}</h3>
      <h4>{dish}</h4>
      <p>{type}</p>
      <p>{rating} Star</p>
    </div>
  );
};

const resList = [
  {
    id: 1,
    resName: "KFC Resturants",
    dish: "Burger",
    type: "Snacks",
    // imgUrl:
    //   "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/",
    rating: "3.8",
    imgID: "56c9ab92bd79745fd152a30fa2525426",
  },
  {
    id: 2,
    resName: "McDonald's",
    dish: "Combo",
    type: "Fast food",
    rating: "4.5",
    imgID: "ee5f8e06b300efc07c9fe3f4df40dfc4",
  },
  {
    id: 3,
    resName: "Keventer's",
    dish: "Shakes",
    type: "Drink",
    rating: "4.0",
    imgID: "f0e94c984813053f46c214f18ce73d59",
  },
];

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key = {restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
      {/* <Footer /> */}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
