import React from "react";
import { Link } from "react-router-dom";
const sidebar = () => {
  return (
    <div className="col-lg-6 text-center">
      <div className="mobile_container">
        <div className="mobile">
          <img src={`${process.env.PUBLIC_URL}/img/mobile.jpg`} alt="" />
          <div className="slider"></div>
        </div>
        <p>Get the app</p>
        <div className="app">
          <Link to="#">
            <img
              className="apple"
              src={`${process.env.PUBLIC_URL}/img/apple.png`}
              alt="apple"
            />
          </Link>
          <Link to="#">
            <img
              className="playstore"
              src={`${process.env.PUBLIC_URL}/img/playstore.png`}
              alt="playstore"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default sidebar;
