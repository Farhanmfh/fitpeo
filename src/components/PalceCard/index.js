import React from "react";

import "./styles.css";

const PlaceInfo = ({ name, store, days, price, img }) => {
    return (
        <div className="info-card">
            <img src={img} height={"200px"} width={"350px"} />
            <h3>Name : {name} </h3>
            <h4>Store : {store} </h4>
            Day Tour : {days}
            <br />
            $:{price}
        </div>
    );
};

export default PlaceInfo;
