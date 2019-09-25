import React, { Component } from 'react';

export default class BasicState extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Nate",
    }

    setTimeout(
      this.changeName.bind(this)
    , 5000);
  }

  changeName = () => {
    this.setState({ name: "Whiskey" });
  }

  render() {
    return (
      <div>
        <h1>My name is { this.state.name }</h1>
      </div>
    )
  }
}
