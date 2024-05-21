import React, { useState, useEffect } from "react";
import Character from "./Character";
import Place from "./Place";
import { Link } from "react-router-dom";

function Parent() {
  const [characters, setCharacters] = useState([]);
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data));
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/places")
      .then((res) => res.json())
      .then((data) => setPlaces(data));
  }, []);

  return (
    <>
      {characters.map((c) => (
        <Link key={c.id} to={`/characters/${c.id}`}>
          <div>
            <Character character={c} name={c.name} img={c.image} />
          </div>
        </Link>
      ))}

      {places.map((p) => (
        <Link key={p.id} to={`/places/${p.id}`}>
          <div>
            <Place place={p} name={p.name} img={p.image} />
          </div>
        </Link>
      ))}
    </>
  );
}

export default Parent;
