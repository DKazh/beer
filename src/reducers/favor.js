import * as R from 'ramda'

import {
  ADD_CART_TO_FAVOR
} from '../actionTypes'

const initialState = []

export default (state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_CART_TO_FAVOR:
      return R.append(payload, state)
    default:
      return state
  }
}