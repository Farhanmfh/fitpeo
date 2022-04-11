import React from "react";
import "./styles.css";

const NavBar = () => {
  return (
    <div className="nav-bar">
      <a href="/home" className="nav-logo">
        <span>
          <img
            src="https://www.freepnglogos.com/uploads/plane-png/plane-png-flights-airlines-msp-airport-1.png"
            width="80px"
          />
        </span>
      </a>
      <div className="nav-items">
        <a href="#"> Store List</a>
        <a href="#"> Tour Locator</a>
        <a href="#"> System Pages</a>
        <a href="#"> Layout Variants</a>
        <a href="#"> Tutorials</a>
        <button className="tour-button">
         + Submit a Tour
        </button>
      </div>
    </div>
  );
};
export default NavBar;
