import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faClock,
    faFireFlameCurved,
    faGem,
    faHeart,
    faPeopleGroup,
    faSnowflake,
} from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

const Tour = ({ tourDetails }) => {
    const { name, store, days, guests, price, img } = tourDetails;
    return (
        <div className="info-card">
            <img src={img} height="200px" width="300px" />
            <div className="container">
                <h3>
                    <FontAwesomeIcon
                        icon={faFireFlameCurved}
                        style={{ color: "#b73846" }}
                    />
                    {name}
                </h3>
                <span>Store </span>
                <h5 style={{ color: "#84c2c7", display: "inline" }}>
                    <FontAwesomeIcon
                        icon={faGem}
                        style={{ color: "#b73846" }}
                    />
                    {store}
                </h5>
                <FontAwesomeIcon
                    style={{ color: "#f4a60e" }}
                    icon={faPeopleGroup}
                />
                {guests}
                <FontAwesomeIcon style={{ color: "#f4a60e" }} icon={faClock} />
                {days}
                Days Tour
                <h3 style={{ color: "red", paddingTop: "10px" }}>
                    <FontAwesomeIcon
                        style={{ color: "#8080806b", opacity: "40%" }}
                        icon={faHeart}
                    />
                    <FontAwesomeIcon
                        style={{ color: "#8080806b", opacity: "40%" }}
                        icon={faSnowflake}
                    />
                    <span style={{ marginLeft: "60%" }}>${price}</span>
                </h3>
            </div>
        </div>
    );
};

export default Tour;
