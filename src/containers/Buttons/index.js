import React, { Component } from 'react';
import './main.css';
import Button from '../Button';
import {addCartToFavor} from '../../actions';

const buttonName = [{
	name: 'Вернуться в каталог',
	key: 'home',
	sign: 'fa-home',
	action: addCartToFavor,
	classList: 'header-button'
},
	{name: 'В избранное',
	key: 'favourites',
	sign: 'fa-star',
	action: addCartToFavor,
	classList: 'header-button'
}];
class Buttons extends Component {
  render() {
    return (
      <div className="header__button-wrapper">
      {buttonName.map((button) => 
      	<Button name={button.name} key={button.key} action={button.action} classList={button.classList}/>      	
      )}
      </div>
    );
  }
}

export default Buttons;
