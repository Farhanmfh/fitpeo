import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faAngleDown } from '@fortawesome/free-solid-svg-icons'

import navitems from "./navitems";
import NavLogo from "../../store/NavLogo.png";

import "./styles.css";

const NavBar = () => {
    return (
        <div className="nav-bar">
            <a href="#" className="nav-logo">
                <img src={NavLogo} alt="Logo" className="nav-bar_logo" />
            </a>
            <div className="nav-items">
                {navitems.map((navItem) => (
                    <>
                        <a href={navItem.path}>{navItem.title}
                            {navItem.isDropdown && <FontAwesomeIcon icon={faAngleDown} className="nav-bar_icon-angledown" />}
                        </a>
                    </>
                ))}
                <button className="tour-button">
                    <FontAwesomeIcon icon={faPlus} className="nav-bar_icon-plus" />
                    <span>Submit a Tour</span>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
