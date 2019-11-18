import React, { useEffect, useState } from "react";

const debounce = (n => {
  let timeoutId;
  return fn => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(fn, n);
  };
})(300);

const apiUrl = "http://www.omdbapi.com/?apikey=20dac387&";

export const Autocomplete = () => {
  const [movies, setMovies] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (input.length >= 3) {
      debounce(() => {
        fetch(`${apiUrl}s=${input}`)
          .then(res => res.json())
          .then(res => {
            const list = res.Search || [];
            setMovies(list);
          });
      });
    }
  }, [input]);

  const handleChange = e => setInput(e.target.value);

  return (
    <div className="example">
      <h3>Autocomplete input</h3>
      <input value={input} onChange={handleChange} />
      {movies.length ? (
        movies.map(movie => (
          <div>
            <p>{movie.Title}</p>
            <img src={movie.Poster} alt={`${movie.Title} poster`} />
          </div>
        ))
      ) : (
        <p>No results...</p>
      )}
    </div>
  );
};
