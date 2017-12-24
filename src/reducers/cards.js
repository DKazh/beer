import { FETCH_CARDS_SUCCESS, FETCH_MORE_SUCCESS, GET_CARD_BY_ID_SUCCESS } from '../actionTypes'
import * as R from 'ramda'

const initialState = {}

export default (state = initialState, {type, payload}) => {
	switch (type) {
		case FETCH_CARDS_SUCCESS:
			return R.merge(state, R.indexBy(R.prop('id'), payload))
		case FETCH_MORE_SUCCESS:
			return R.merge(state, R.indexBy(R.prop('id'), payload))
		case GET_CARD_BY_ID_SUCCESS:
      		return R.merge(state, R.indexBy(R.prop('id'), payload))
		default:
			return state
	}
}