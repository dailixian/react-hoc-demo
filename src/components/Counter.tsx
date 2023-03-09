import React, { Component } from "react";
import withBorder from "../hoc/withBorder";

export class Counter extends Component {
  state = { count: 0 };

  increment = () => {
    this.setState({ count: this.state.count + 1 }, () => {
      console.log(`after incrementing`, this.state);
    });
  };
  decrement() {
    this.setState({ count: this.state.count - 1 });
    console.log(`after decrementing`, this.state);
  }
  render() {
    console.log("this.state is ", this.state);
    return (
      <>
        <h2>Counter {this.state.count}</h2>
        <button onClick={this.increment}>Decrement</button>
        <button onClick={this.decrement.bind(this)}>Increment</button>
      </>
    );
  }
}

export default withBorder("warning")(Counter);
