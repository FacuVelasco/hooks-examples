import React, { useEffect, useState } from "react";

export const Title = () => {
  const [title, setTitle] = useState(document.title);
  const [n, setN] = useState(3);

  useEffect(() => {
    if (title.length >= n) {
      document.title = title;
    }
    setTitle("hola");
  }, [n]);

  return (
    <div className="example">
      <h3>Change the title</h3>
      <label className="input-block">
        TITLE:
        <input
          value={title}
          onChange={({ target }) => setTitle(target.value)}
        />
      </label>
      <small>
        solo si tiene mas de{" "}
        <input
          value={n}
          onChange={({ target: { value } }) => setN(value)}
          style={{ width: "10px" }}
        />{" "}
        letras
      </small>
    </div>
  );
};
