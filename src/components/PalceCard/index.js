import React from "react";
import "./styles.css"

const PlaceInfo = (props) => {
  return (
    <div>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg"} width="200" />
      <h3>Name : {props.name} </h3>
      <h4>Store : {props.store} </h4>
      Day Tour : {props.days}
      {props.price}
    </div>
  );
};

export default PlaceInfo;
