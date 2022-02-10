import React, { Component } from "react";
// import everything from counter.jsx to this file
import Counter from "./counter";

class Counters extends Component {
  state = {};
  // composing components -- Counter
  render() {
    return (
      <div>
        <Counter />
        <Counter />
        <Counter />
        <Counter />
      </div>
    );
  }
}

export default Counters;
