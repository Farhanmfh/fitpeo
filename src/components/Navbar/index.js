import React from "react";
import navitems from "./navitems";

import "./styles.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <a href="/home" className="nav-logo">
                <span>
                    <img
                        src="https://www.freepnglogos.com/uploads/plane-png/plane-png-flights-airlines-msp-airport-1.png" // TODO: download this image and store in assets
                        width="80px"
                    />
                </span>
            </a>
            <div className="nav-items">
                {navitems.map((navItem) => (
                    <a href="#">{navItem}</a>
                ))}
                <button className="tour-button">+ Submit a Tour</button>
                // TODO replace '+' symbol with Icon from "fontawesome"
            </div>
        </div>
    );
};

export default NavBar;
