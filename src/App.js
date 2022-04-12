import React, { useState } from "react";

import "./App.css";
import PlaceInfo from "./components/PalceCard";
import NavBar from "./components/Navbar";
import TourData from "./components/PalceCard/tourDetails";

function App() {
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
            <NavBar />
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

export default App;
