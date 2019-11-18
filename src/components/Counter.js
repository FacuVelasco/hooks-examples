import React, { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState();

  const onIncrease = () => {
    setValue(value + 1);
  };

  const onDecrease = () => {
    setValue(value - 1);
  };

  return (
    <div className="example">
      <h3>Crappy Counter</h3>
      <div>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
      </div>
      <p>{value}</p>
    </div>
  );
};
