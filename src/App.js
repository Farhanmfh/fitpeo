import React, { useState } from "react";

import "./App.css";
import PlaceInfo from "./components/PalceCard";
import NavBar from "./components/Navbar";

const initialData = {
    name: "Car Tour Africa",
    store: "Make my Trip",
    days: 5,
    price: 650,
};

function App() {
    const [data, setData] = useState(initialData);
    return (
        <div className="App">
            <NavBar />
            <div className="grid-container">
                <div className="main-section">
                    <h1>Find Adventure you wana talk about</h1>
                    <input placeholder="Search Tour" />
                </div>
                <div className="side-nav"></div>
                <div className="card-info">
                    <PlaceInfo
                        name={data.name}
                        store={data.store}
                        days={data.days}
                        price={data.price}
                    />
                </div>
                <div className="card-info">
                    <PlaceInfo
                        name={data.name}
                        store={data.store}
                        days={data.days}
                        price={data.price}
                    />
                </div>
                <div className="card-info">
                    <PlaceInfo
                        name={data.name}
                        store={data.store}
                        days={data.days}
                        price={data.price}
                    />
                </div>
            </div>
        </div>
    );
}

export default App;
