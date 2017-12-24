import { FETCH_CARDS_SUCCESS, FETCH_MORE_SUCCESS } from '../actionTypes'
import * as R from 'ramda'

const initialState = {
  ids: []
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
  	case FETCH_CARDS_SUCCESS:
      return R.merge(state, {
        ids: R.pluck('id', payload)
      })
    case FETCH_MORE_SUCCESS:
      const ids = R.pluck('id', payload)	
      return R.merge(state, {
        ids: R.concat(state.ids, ids)
      })
    default:
      return state
  }
}