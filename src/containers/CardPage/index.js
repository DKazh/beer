import React, { Component } from 'react'
import './main.css'
import {connect} from 'react-redux'
import {fetchCardById} from '../../actions'
import {withRouter} from 'react-router-dom'


class CardPage extends Component {
  componentDidMount () {
  this.props.fetchCardById(this.props.match.params.id)
  }

  render() {
    const card = this.props.card
    return (
      <div className="card-page__wrapper">
        <div className="card-page__img"><img src={card.image_url} alt={card.name}/></div>
        <div className="card-page__content">
          <h2 className="card-page__title">{card.name}</h2>
          <div className="card-page__text">{card.description}</div>
          <ul className="card-page__params">
            <li className="card-page__param">{card.abv}</li>
            <li className="card-page__param">{card.food_pairing}</li>
            <li className="card-page__param">{card.ingridients}</li>
          </ul>
        </div>        
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCardById
}

const mapStateToProps = state => {
  return {
    card: state.cardPage,
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CardPage)
)