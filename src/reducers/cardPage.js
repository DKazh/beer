import { GET_CARD_BY_ID_SUCCESS } from '../actionTypes'
import * as R from 'ramda'

const initialState = {
  id: null,
  abv: null,
  description: null,
  food_pairing: null,
  image_url: null,
  name: null,
  volume: null,
  ingridients: null
}

export default (state = initialState, {type, payload}) => {
  switch (type) {
  	case GET_CARD_BY_ID_SUCCESS:
      return R.merge(state, payload[0])
    default:
      return state
  }
}