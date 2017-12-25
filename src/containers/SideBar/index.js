import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './main.css';

class SideBar extends Component {
  render() {
  	const card={}
    return (
    <div className="sidebar__wrapper">
    	<div className="sidebar__wrapper">
    		<h3 className="sidebar__title center">ИЗБРАННОЕ:</h3>
    		<ul className="sidebar__ul">
				<li className="sidebar__li center">Пиво 1</li>
				<li className="sidebar__li center">Пиво 1</li>
				<li className="sidebar__li center">Пиво 1</li>
    		</ul>
    		<div className="sidebar__count center">Количество бутылок</div>
    		<div className="sidebar__abv center">Суммарная крепость</div>
    	</div>
      <Link to={`/cards/${card.id}`}><button className="card__button button__margin margin-top-20">
      	<i class="fa fa-star margin-right-10" aria-hidden="true"></i>
      	В избранное
      </button></Link>
      <Link to={`/cards/${card.id}`}><button className="card__button button__margin margin-top-20">
      	<i class="fa fa-home margin-right-10" aria-hidden="true"></i>
      	Вернуться в каталог
      </button></Link>
    </div>
    );
  }
}

export default SideBar;
