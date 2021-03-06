import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Types extends Component {
  render() {
    return (
      <div>
        <h1>Hello, { this.props.name }, { typeof this.props.name }</h1>
        <h1>This one has a default value of: { this.props.value }</h1>
      </div>
    )
  }
}

Types.propTypes = {
  name: PropTypes.string
}

Types.defaultProps = {
  value: "42"
}