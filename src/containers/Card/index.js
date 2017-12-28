import React, { Component } from 'react'
import * as R from 'ramda'
import './main.css'
import {Link} from 'react-router-dom'
import Button from '../Button';

class Card extends Component {

  render() {
    const card = this.props.cardData
    const addCartToFavor = this.props.addCartToFavor
    const preview = `${R.take(100, card.description)}...`
    const style = {
      backgroundImage: `url(${card.image_url})`
    }
    return (
      <div className="card">
      <div className="card__img" style={style}></div>
      <div className="card__desc">
      	<h2 className="card__title">{card.name}</h2>
      	<div className="card__text">{preview}</div>
        <Link to={`/cards/${card.id}`} className="card__button button__margin">
          <i class="fa fa-arrow-right margin-right-5" aria-hidden="true"></i>
          подробнее
        </Link>
        <Button action={addCartToFavor} id={card.id}/>
      </div>
      </div>
    );
  }
}

export default Card;
