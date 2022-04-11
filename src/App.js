import React, { useState } from "react";
import "./App.css";
import PlaceInfo from "./components/PalceCard";
import NavBar from "./components/Navbar";

function App() {
  const [data, setData] = useState({
    name: "Car Tour Africa",
    store: "Make my Trip",
    days: 5,
    price: 650,
  });
  return (
    <div className="App">
      <NavBar />
      <section className="HomePageImg">
        <h1>Find Adventure you wana talk about</h1>
        <input placeholder="Search Tour" />
      </section>

      <PlaceInfo
        name={data.name}
        store={data.store}
        days={data.days}
        price={data.price}
      />
    </div>
  );
}

export default App;
