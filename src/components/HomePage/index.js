import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleRight,
    faArrowRight,
    faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

import sideNavImg from "../../store/sideNavBG.jpg";
import Tour from "../TourCard";
import tourData from "../TourCard/tourDetails";
import "./styles.css";

function HomePage() {
    return (
        <div className="App">
            <div className="main-section">
                <div style={{ display: "flex" }}>
                    <div style={{ width: "40%" }}>
                        <h1 className="homepage_title">
                            Find{" "}
                            <b>
                                <i>Adventures</i>
                            </b>
                            , you want talk about
                        </h1>
                    </div>
                    <div style={{ width: "60%", textAlign: "right" }}>
                        <button className="tour-button">
                            <span>How it Works</span>
                            <FontAwesomeIcon icon={faAngleRight} />
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
                            className="search-field-arrow-right"
                        />
                    </div>
                </div>
            </div>
            <div className="bottom-section">
                <h2 style={{ fontSize: "45px", marginBottom: "20px" }}>
                    <b>
                        <i>Required</i>
                    </b>{" "}
                    to Visit
                </h2>
                <div style={{ display: "flex" }}>
                    <img src={sideNavImg} className="side-nav-img" />
                    <div
                        className="tour-info"
                        style={{ display: "flex", width: "60%" }}
                    >
                        {tourData.map((tourDetails) => (
                            <div className="tour">
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
