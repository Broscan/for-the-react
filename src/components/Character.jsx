import React, { useEffect } from "react";

function Character(props) {
  return (
    <>
      <h1>{props.character.name}</h1>
      <img src={props.character.image} alt="" />
      <br />
      <hr />
    </>
  );
}

export default Character;
