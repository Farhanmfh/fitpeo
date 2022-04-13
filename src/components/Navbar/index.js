import React from "react";

import navitems from "./navitems";
import NavLogo from "../../store/NavLogo.png";

import "./styles.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <a href="#" className="nav-logo">
                <img src={NavLogo} alt="Logo" width="80px" />
            </a>
            <div className="nav-items">
                {navitems.map((navItem) => (
                    <a href={navItem.path}>{navItem.title}</a>
                ))}
                <button className="tour-button">Submit a Tour</button>
            </div>
        </div>
    );
};

export default NavBar;
