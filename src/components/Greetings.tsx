import { Component } from "react";
import withBorder from "../hoc/withBorder";

class Greetings extends Component {
  render() {
    return <h1>Hello Friends!</h1>;
  }
}

export default withBorder("")(Greetings);
