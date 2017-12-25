import React, { Component } from 'react';
import './main.css';
import Header from '../Header';
import Search from '../Search';
import Cards from '../Cards';
import CardPage from '../CardPage';
import {Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Search/>
        <div className="content__wrapper">
        <Switch>
        	<Route path='/' exact component={Cards} />
        	<Route path={'/cards/:id'} component={CardPage} />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
