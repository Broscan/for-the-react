import React from "react";

function Place(props) {
  return (
    <>
      <h1>{props.place.name}</h1>
      <img src={props.place.image} alt="" />
      <br />
      <hr />
    </>
  );
}

export default Place;
