import React, { Component } from 'react'
import './main.css'
import SideBar from '../SideBar';
import {connect} from 'react-redux'
import {fetchCardById} from '../../actions'
import {withRouter} from 'react-router-dom'
import Button from '../Button'
import {addCartToFavor} from '../../actions'
import {Link} from 'react-router-dom'


class CardPage extends Component {
  componentDidMount () {
  this.props.fetchCardById(this.props.match.params.id)
  }

  render() {
    const card = this.props.card
    const style = {
      backgroundImage: `url(${card.image_url})`
    }
    const addCartToFavor = this.props.addCartToFavor

    return (
      <div className="card-page__wrapper">
        <div className="card-page__img" style={style}></div>
        <div className="card-page__content">
          <h2 className="card-page__title">{card.name}</h2>
          <ul className="card-page__params">
            <li className="card-page__param"><span className="card-page__text-title">ABV: </span>{card.abv}</li>
            <li className="card-page__param"><span className="card-page__text-title">FOOD PAIRING: </span>{card.food_pairing}</li>
            <li className="card-page__param"><span className="card-page__text-title">INGRIDIENTS: </span>{card.ingridients}</li>
          </ul>
          <div className="card-page__text">{card.description}</div>
          <Link className="card__button button__margin" to={`/`}>
              <i class={`fa fa-home margin-right-5`} aria-hidden="true"></i>вернуться в каталог
          </Link>
           <Button action={addCartToFavor} id={card.id}/>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchCardById,
  addCartToFavor
}

const mapStateToProps = state => {
  return {
    card: state.cardPage,
  }
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CardPage)
)