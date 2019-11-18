import React, { useEffect, useState } from "react";

const apiUrl = "https://pokeapi.co/api/v2/";

export const Fetch = () => {
  const [pikachu, setPikachu] = useState(null);

  useEffect(() => {
    fetch(`${apiUrl}pokemon/pikachu/`)
      .then(res => res.json())
      .then(setPikachu);
  }, []);

  return (
    <div className="example">
      <h3>Let's fetch on enter!</h3>
      {pikachu ? (
        <div>
          <p>{pikachu.name}</p>
          <img src={pikachu.sprites.front_default} alt="pikachu" />
        </div>
      ) : (
        <p>it's loading...</p>
      )}
    </div>
  );
};
