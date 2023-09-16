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
  return (
    <div className="res-card" style={styleCard}>
      <img src={props.imgUrl} alt="res-img" />
      <h3>{props.resName}</h3>
      <h4>{props.dish}</h4>
      <p>{props.type}</p>
      <p>{props.rating} Star</p>
    </div>
  );
};

const resObj = {
  resName: "KFC Resturants",
  dish: "Burger",
  type: "Snacks",
  imgUrl:
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426",
  rating: "3.8",
};

const Body = () => {
  return (
    <div className="body">
      <div className="search"></div>
      <div className="res-container">
        <RestaurantCard
          resName="XYZ Resturants"
          dish="ABC dish"
          type="South Indian"
          imgUrl="https://static.toiimg.com/thumb/61879742.cms?resizemode=4&width=1200"
          rating="4.5"
        />
        <RestaurantCard
          // resName="KFC Resturants"
          // dish="Burger"
          // type="Snacks"
          // imgUrl="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/56c9ab92bd79745fd152a30fa2525426"
          // rating="3.8"
          resData = {resObj}
        />
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
