import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";

import "./App.css";
import Tour from "./components/Tour";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                    <Route exact path="/tour/:tourId" element={<Tour />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
