import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './main.css';
import {addCartToFavor} from '../../actions';
import {connect} from 'react-redux';
import {getBeerName,getCountOfBottles, getTotalABV} from '../../selectors';
import {withRouter} from 'react-router-dom'

class SideBar extends Component {
  render() {
  	const card={}
    return (
    <div className="sidebar__wrapper">
    	<div className="sidebar__wrapper">
    		<h3 className="sidebar__title center">ИЗБРАННОЕ:</h3>
    		<ul className="sidebar__ul">
    		{this.props.beerName.map((beer, index) =>
				<li className="sidebar__li center" key={beer.id}>{beer.name}</li>
			)}	
    		</ul>
    		<div className="sidebar__count center">Количество бутылок: {this.props.count}</div>
    		<div className="sidebar__abv center">Суммарная крепость: {this.props.totalAlc} ABV</div>
    	</div>
    </div>
    );
  }
}
const mapStateToProps = state => {
  return {
  	beerName: getBeerName(state),
    count: getCountOfBottles(state),
    totalAlc: getTotalABV(state)
  }
}

export default withRouter(
  connect(mapStateToProps, null)(SideBar)
)