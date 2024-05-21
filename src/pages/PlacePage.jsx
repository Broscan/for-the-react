import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PlacePage() {
  const [place, setPlaces] = useState({});
  const { placeId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/places/${placeId}`)
      .then((res) => res.json())
      .then((data) => {
        setPlaces(data);
      });
  }, [placeId]);
  return (
    <>
      <h1>{place.name}</h1>
      <img src={`../${place.image}`} alt="Image of Arthas" />
      <p>{place.description}</p>
      <h2>{place.landmark}</h2>
      <h3>{place.faction}</h3>
    </>
  );
}

export default PlacePage;
