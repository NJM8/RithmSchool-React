import React, { Component } from 'react';

class Parent extends Component {
  render() {
    return (
      <div>
        <h1>Hi Kids!</h1>
        { this.props.children }
      </div>
    )
  }
}

export default class Children extends Component {
  render() {
    return (
      <Parent>
        <h2>These are the children.</h2>
      </Parent>
    )
  }
}