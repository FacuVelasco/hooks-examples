import React, { Component, Fragment } from "react";

import { CustomInput } from "../components/CustomInput";

export class Custom extends Component {
  render() {
    return (
      <Fragment>
        <h1>Custom Hooks</h1>
        <div className="example-container">
          <CustomInput />
        </div>
      </Fragment>
    );
  }
}
