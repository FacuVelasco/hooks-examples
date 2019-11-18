import React, { Component, Fragment } from "react";

import { Fetch } from "../components/Fetch";
import { Autocomplete } from "../components/Autocomplete";

export class Async extends Component {
  render() {
    return (
      <Fragment>
        <h1>Effectos asincronicos</h1>
        <div className="example-container">
          <Fetch />
          <Autocomplete />
        </div>
      </Fragment>
    );
  }
}
