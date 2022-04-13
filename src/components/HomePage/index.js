import React from "react";

import Tour from "../TourCard";
import tourData from "../TourCard/tourDetails";
import "./styles.css";

function HomePage() {
    return (
        <div className="App">
            <div className="grid-container">
                <div className="main-section">
                    <h1>Find Adventure you wana talk about</h1>
                    <input placeholder="Search Tour" />
                </div>
                <div className="side-nav"></div>
                {tourData.map((tourDetails) => (
                    <div className="card-info">
                        <Tour tourDetails={tourDetails} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HomePage;
