import React, { useState } from "react";
import PlaceInfo from "../PalceCard";
import TourData from "../PalceCard/tourDetails";

import "./styles.css";

function HomePage() {
    const [data, setData] = useState(TourData);
    let tourCard = data.map((item) => (
        <div className="card-info">
            <PlaceInfo
                key={item.name}
                name={item.name}
                store={item.store}
                days={item.days}
                price={item.price}
                img={item.img}
            />
        </div>
    ));
    return (
        <div className="App">
            <div className="grid-container">
                <div className="main-section">
                    <h1>Find Adventure you wana talk about</h1>
                    <input placeholder="Search Tour" />
                </div>
                <div className="side-nav"></div>
                {tourCard}
            </div>
        </div>
    );
}

export default HomePage;
