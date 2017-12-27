import React, { Component } from 'react';
import './main.css';
import Card from '../Card';
import {connect} from 'react-redux';
import {fetchCards, loadMore} from '../../actions';
import {getCards} from '../../selectors';

class Cards extends Component {
  componentDidMount () {
    this.props.fetchCards()
  }
  render() {
    const {cards, loadMore} = this.props
    return (
      <div className="cards">
        {cards.map((card, index) => <Card cardData={card} key={card.id}/>)}
        <button onClick={loadMore} className="load-more">Показать еще</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cards: getCards(state)
})

const mapDispatchToProps = {
  fetchCards,
  loadMore
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);

