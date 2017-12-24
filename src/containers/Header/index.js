import React, { Component } from 'react';
import './main.css';
import Buttons from '../Buttons';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1 className="header__title">Beans Love Beer</h1>
        <Buttons/>
      </header>
    );
  }
}

export default Header;
