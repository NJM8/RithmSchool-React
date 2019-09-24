import React, { Component } from "react";
import PropTypes from "prop-types";

export default class InstructorItem extends Component {
  render() {
    return (
      <li>
      <h1>{ this.props.name }</h1>
      <img src={ this.props.avator } alt={ this.props.name }/>
      <p>
        <strong>Hobby:</strong> { this.props.hobby }
      </p>
    </li>
    )
  }
}

InstructorItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  hobby: PropTypes.string
}