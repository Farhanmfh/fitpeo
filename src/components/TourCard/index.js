import React from "react";

import "./styles.css";

const Tour = ({ tourDetails }) => {
    const { name, store, days, price, img } = tourDetails;
    return (
        <div className="info-card">
            <img src={img} height="200px" width="300px" />
            <h3>{name}</h3>
            <h4>Store {store} </h4>
            Day Tour : {days}
            <br />${price}
        </div>
    );
};

export default Tour;
