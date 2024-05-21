import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function CharacterPage() {
  const [character, setCharacters] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/characters/${characterId}`)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data);
        console.log(data.image);
      });
  }, [characterId]);

  return (
    <>
      <h1>{character.name}</h1>
      <img src={`../${character.image}`} />
      <h2>{character.description}</h2>
      <h3>Allegiance: {character.allegiance}</h3>
    </>
  );
}

export default CharacterPage;
