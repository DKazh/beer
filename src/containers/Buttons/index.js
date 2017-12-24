import React, { Component } from 'react';
import './main.css';
import Button from '../Button';

const buttonName = ['Home', 'Favourites'];
class Buttons extends Component {
  render() {
    return (
      <div className="header__button-wrapper">
      {buttonName.map((button) => 
      	<Button name={button} key={button}/>
      )}
      </div>
    );
  }
}

export default Buttons;
