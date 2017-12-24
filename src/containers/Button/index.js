import React, { Component } from 'react';
import './main.css';

class Button extends Component {
  render() {
    return (
      <div className="header-button">{this.props.name}</div>
    );
  }
}

export default Button;
