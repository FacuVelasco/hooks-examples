import React, { Component } from "react";

const emptyState = {
  name: "",
  surname: "",
  email: ""
};

export class Form extends Component {
  state = emptyState;

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    alert("FORM SUBMIT:" + JSON.stringify(this.state));
    // post some action
    this.setState(emptyState);
  };

  render() {
    return (
      <div className="example">
        <h3>Crapy form</h3>
        <form onSubmit={this.handleSubmit} className="vertical-form">
          {Object.keys(this.state).map(value => (
            <label key={value} className="input-block">
              {value.toUpperCase()}:
              <input
                name={value}
                value={this.state[value]}
                onChange={this.handleChange}
              />
            </label>
          ))}
          <button style={{ alignSelf: "flex-end" }}>SUBMIT</button>
        </form>
      </div>
    );
  }
}
