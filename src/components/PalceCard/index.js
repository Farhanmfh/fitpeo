import React from "react";

import "./styles.css";
import img from '../../store/NavLogo.png'

const PlaceInfo = ({ name, store, days, price }) => {
    return (
        <div>
            <img
                src={img}
                width="200"
            />
            <h3>Name : {name} </h3>
            <h4>Store : {store} </h4>
            Day Tour : {days}
            <br />
            $:{price}
        </div>
    );
};

export default PlaceInfo;
