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
            <img src={img} className="tour-image" />
            <div className="container">
                <h3>
                    <FontAwesomeIcon
                        className="icon-flame"
                        icon={faFireFlameCurved}
                    />
                    {name}
                </h3>
                <div>
                    <span>Store </span>
                    <span className="store-info">
                        <FontAwesomeIcon className="icon-gem" icon={faGem} />
                        {store}
                    </span>
                </div>
                <div>
                    <FontAwesomeIcon
                        className="icon-group-clock"
                        icon={faPeopleGroup}
                    />
                    {guests}
                </div>

                <div>
                    <FontAwesomeIcon
                        className="icon-group-clock"
                        icon={faClock}
                    />
                    {days}
                </div>
                <div className="price-info">
                    <div className="price-info-icons">
                        <FontAwesomeIcon
                            className="icon-price"
                            icon={faHeart}
                        />
                        <FontAwesomeIcon
                            className="icon-price"
                            icon={faSnowflake}
                        />
                    </div>
                    <div className="price-tag">${price}</div>
                </div>
            </div>
        </div>
    );
};

export default Tour;
