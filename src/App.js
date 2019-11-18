import React from "react";
import * as examples from "./examples";

function App() {
  const [example, setExample] = React.useState("State");

  return (
    <div className="App">
      <header className="App-header">
        <ul className="header-list">
          {Object.keys(examples).map(ex => (
            <li
              className={ex === example ? "selected" : ""}
              key={ex}
              onClick={() => setExample(ex)}
            >
              {ex.toUpperCase()}
            </li>
          ))}
        </ul>
      </header>
      <section>{React.createElement(examples[example])}</section>
    </div>
  );
}

export default App;
