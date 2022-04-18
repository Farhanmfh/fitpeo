import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

import navitems from "./navitems";
import NavLogo from "../../store/NavLogo.png";

import "./styles.css";

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <div className="nav-bar">
            <img
                src={NavLogo}
                alt="Logo"
                className="nav-bar_logo"
                onClick={() => navigate("/")}
            />
            <div className="nav-items">
                {navitems.map((navItem) => (
                    <>
                        <a href={navItem.path}>
                            {navItem.title}
                            {navItem.isDropdown && (
                                <FontAwesomeIcon
                                    icon={faAngleDown}
                                    className="nav-bar_icon-angledown"
                                />
                            )}
                        </a>
                    </>
                ))}
                <button className="tour-button-nav">
                    <FontAwesomeIcon
                        icon={faPlus}
                        className="nav-bar_icon-plus"
                    />
                    <span>Submit a Tour</span>
                </button>
            </div>
        </div>
    );
};

export default NavBar;
