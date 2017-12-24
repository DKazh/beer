import axios from 'axios'
import {getRenderedCount} from '../selectors'
import {
  FETCH_CARDS_START,
  FETCH_CARDS_SUCCESS,
  FETCH_CARDS_FAILURE,
  FETCH_MORE_START,
  FETCH_MORE_SUCCESS,
  FETCH_MORE_FAILURE,
  GET_CARD_BY_ID_START,
  GET_CARD_BY_ID_SUCCESS,
  GET_CARD_BY_ID_FAILURE
} from '../actionTypes'



export const fetchCardById = (id) => async dispatch => {	
  dispatch({type: GET_CARD_BY_ID_START})


  try {
    const card = await axios.get(`https://api.punkapi.com/v2/beers/${id}`)
    
    dispatch({
      type: GET_CARD_BY_ID_SUCCESS,
      payload: card.data
    })
  } catch (err) {
    dispatch({
      type: GET_CARD_BY_ID_FAILURE,
      payload: err,
      error: true
    })
  }
}

export const fetchCards = () => async dispatch => { 
	dispatch({type: FETCH_CARDS_START})

	try {
	  const cards = await axios.get('https://api.punkapi.com/v2/beers?page=1&per_page=6')
	  dispatch({
	      type: FETCH_CARDS_SUCCESS,
	      payload: cards.data
	    })
	} catch (err) {
	  dispatch({
	    type: FETCH_CARDS_FAILURE,
	    payload: err,
	    error: true
	  })
	}
}

export const loadMore = () => async (dispatch, getState)=> {
	const offset = getRenderedCount(getState())
	const perPage = 6
	const pageNumber = Math.floor(offset / perPage)+1

	dispatch({type: FETCH_MORE_START})

	try {
	  const cards = await axios.get(`https://api.punkapi.com/v2/beers?page=${pageNumber}&per_page=${perPage}`)

	  dispatch({
	      type: FETCH_MORE_SUCCESS,
	      payload: cards.data
	    })
	} catch (err) {
	  dispatch({
	    type: FETCH_MORE_FAILURE,
	    payload: err,
	    error: true
	  })
	}
}
