import React, { Component } from 'react';
import './main.css';

class Search extends Component {
  render() {
    return (
    <div className="search">	
      <input className="search__input" placeholder="Search for beer...">{this.props.name}</input>
      <div className="search__button">Search</div>
    </div>
    );
  }
}

export default Search;
