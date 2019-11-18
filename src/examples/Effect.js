import React, { Component, Fragment } from "react";

import { Title } from "../components/Title";
import { List } from "../components/List";

export class Effect extends Component {
  render() {
    return (
      <Fragment>
        <h1>useEffect</h1>
        <p>Corre un efecto secundario cada vez que hay un cambio</p>
        <div className="example-container">
          <Title />
          <List />
        </div>
      </Fragment>
    );
  }
}
