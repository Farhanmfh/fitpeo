import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
    faAngleRight,
    faArrowRight,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import sideNavImg from "../../store/sideNavBG.jpg";
import Tour from "../TourCard";
import tourData from "../TourCard/dummyTourData";
import "./styles.css";

function HomePage() {
    const navigate = useNavigate();
    const handleTourClick = (tourId) => {
        navigate(`/tour/${tourId}`);
    };

    return (
        <div className="App">
            <div className="main-section">
                <div className="main-title-div">
                    <div className="main-title-text">
                        <h1 className="homepage_title">
                            Find{" "}
                            <b>
                                <i>Adventures</i>
                            </b>
                            , you want talk about
                        </h1>
                    </div>
                    <div className="dashboad-button">
                        <button className="tour-button">
                            <span>How it Works</span>
                            <FontAwesomeIcon
                                icon={faAngleRight}
                                className="icon-AngleRight"
                            />
                        </button>
                    </div>
                </div>
                <div className="search-field-card">
                    <FontAwesomeIcon
                        icon={faArrowRight}
                        className="search-field-arrow-right"
                    />
                    <input placeholder="Search Tour" className="search-field" />
                    <div className="search-button">
                        <FontAwesomeIcon
                            icon={faMagnifyingGlass}
                            className="icon-search"
                        />
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <h2>
                    <b>
                        <i>Required</i>
                    </b>{" "}
                    to Visit
                </h2>
                <div style={{ display: "flex" }}>
                    <img src={sideNavImg} className="side-nav-img" />
                    <div className="tour-info">
                        {tourData.map((tourDetails) => (
                            <div
                                className="tour"
                                key={tourDetails.id}
                                onClick={() => handleTourClick(tourDetails.id)}
                            >
                                <Tour tourDetails={tourDetails} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
