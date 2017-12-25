import React, { Component } from 'react'
import * as R from 'ramda'
import './main.css'
import {Link} from 'react-router-dom'

class Card extends Component {

  render() {
    const card = this.props.cardData
    const preview = `${R.take(100, card.description)}...`
    const style = {
      'background-image': `url(${card.image_url})`
    }
    return (
      <div className="card">
      <div className="card__img" style={style}></div>
      <div className="card__desc">
      	<h2 className="card__title">{card.name}</h2>
      	<div className="card__text">{preview}</div>
        <Link to={`/cards/${card.id}`}><button className="card__button button__margin">ПОДРОБНЕЕ</button></Link>
        <Link to={`/cards/${card.id}`}><button className="card__button button__margin">В ИЗБРАННОЕ</button></Link>
      </div>
      </div>
    );
  }
}

export default Card;
