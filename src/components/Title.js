import React, { Component } from "react";

export class Title extends Component {
  state = {
    value: document.title
  };

  handleChange = e => {
    const { value } = e.target;
    if (value.length >= 3) {
      document.title = value;
    }

    this.setState({ value });
  };

  render() {
    return (
      <div className="example">
        <h3>Change the title</h3>
        <label className="input-block">
          TITLE:
          <input value={this.state.value} onChange={this.handleChange} />
        </label>
        <small>
          solo si tiene mas de{" "}
          <input value={3} onChange={() => {}} style={{ width: "10px" }} />{" "}
          letras
        </small>
      </div>
    );
  }
}
