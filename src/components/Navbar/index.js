import React from "react";  
import navitems from "./navitems";
import NavLogo from "../../store/NavLogo.png";

import "./styles.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <a href="#" className="nav-logo">
                <span>
                    <img src={NavLogo} alt="Logo" width="80px" />
                </span>
            </a>
            <div className="nav-items">
                {navitems.map((navItem) => (
                    <a href="#">{navItem}</a>
                ))}
                <button className="tour-button">Submit a Tour</button>
            </div>
        </div>
    );
};

export default NavBar;
