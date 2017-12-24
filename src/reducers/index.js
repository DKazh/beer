import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import cards from './cards'
import cardsList from './cardsList'
import cardPage from './cardPage'

export default combineReducers({
	routing: routerReducer,
    cards,
    cardsList,
    cardPage
})