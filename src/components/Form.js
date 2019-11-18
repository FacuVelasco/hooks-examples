import React, { useState, useEffect } from "react";

const useInputWithReaction = fn => {
  const [input, setInput] = useState("");
  useEffect(() => {
    fn();
  }, [input]);
  return [input, setInput];
};

export const Form = () => {
  const [input, setInput] = useInputWithReaction(() =>
    console.log("send ajax request")
  );

  return (
    <div className="example">
      <h3>Crappy form</h3>
      <form className="vertical-form">
        <label className="input-block">
          AUTOCOMPLETE:
          <input
            name="name"
            value={input}
            onChange={({ target }) => setInput(target.value)}
          />
        </label>
        <button style={{ alignSelf: "flex-end" }}>SUBMIT</button>
      </form>
    </div>
  );
};
