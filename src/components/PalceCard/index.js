import React from "react";

import "./styles.css";

const PlaceInfo = ({ name, store, days, price }) => {
    return (
        <div>
            <img
                src={
                    "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"
                }
                width="200"
            />
            <h3>Name : {name} </h3>
            <h4>Store : {store} </h4>
            Day Tour : {days}
            {price}
        </div>
    );
};

export default PlaceInfo;
