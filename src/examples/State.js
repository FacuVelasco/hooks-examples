import React, { Component, Fragment } from "react";

import { Counter } from "../components/Counter";
import { Modal } from "../components/Modal";
import { Form } from "../components/Form";

export class State extends Component {
  render() {
    return (
      <Fragment>
        <h1>useState</h1>
        <p>Mantiene un estado local</p>
        <ul>
          <li>usar un estado</li>
        </ul>
        <div className="example-container">
          <Counter />
          <Modal message="Puedo guardar cualquier tipo de valor en el state" />
          <Form />
        </div>
      </Fragment>
    );
  }
}
