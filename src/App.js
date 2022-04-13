import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/Navbar";

import "./App.css";

function App() {
    return (
        <div className="App">
            <Router>
                <NavBar />
                <Routes>
                    <Route exact path="/" element={<HomePage />} />
                </Routes>
            </Router>
        </div>  
    );
}

export default App;
