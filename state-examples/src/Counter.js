import React, { Component } from "react";

class DoubleCount extends Component {
  render() {
    return (
      <div>
        <p>Double count: { this.props.count * 2 }</p>
      </div>
    )
  }
}

export default class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 1
    }

    // this.addOne = this.addOne.bind(this);
    // this.addOne = function() {
    //   const newCount = this.state.count + 1;
    //   this.setState({ count: newCount });
    // }
  }

  addOne() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  render() {
    return (
      <div>
        <button onClick={ () => this.addOne() }>Add 1</button>
        <p>Count: { this.state.count }</p>
        <DoubleCount count={ this.state.count }/>
      </div>
    )
  }
}
