import React, { Component } from "react";

export class Counter extends Component {
  state = {
    value: 0
  };

  onIncrease = () => {
    this.setState(({ value }) => ({ value: value + 1 }));
  };

  onDecrease = () => {
    this.setState(({ value }) => ({ value: value - 1 }));
  };

  render() {
    return (
      <div className="example">
        <h3>Crapy Counter</h3>
        <div>
          <button onClick={this.onIncrease}>+1</button>
          <button onClick={this.onDecrease}>-1</button>
        </div>
        <p>{this.state.value}</p>
      </div>
    );
  }
}
