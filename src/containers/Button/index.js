import React, { Component } from 'react';
import './main.css';

class Button extends Component {
  render() {
    return (
      <button className="card__button button__margin" onClick={() => this.props.action(this.props.id)}>
      	<i class={`fa fa-star margin-right-5`} aria-hidden="true"></i>добавить
		</button>
    );
  }
}

export default Button;
