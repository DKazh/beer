import * as R from 'ramda'

export const getCardById = (state, id) => R.prop(id, state.cards)

export const getCards = state => { 
	const cards = R.map(id => getCardById(state, id), state.cardsList.ids)
  	return cards 
}

export const getRenderedCount = state => R.length(state.cardsList.ids)

export const getBeerName = state => {
	const name = R.map(id => getCardById(state, id), state.favor)
  return name
}

export const getCountOfBottles = state => R.length(state.favor)

export const getTotalABV = state => {
  const sum = R.compose(
    R.sum,
    R.pluck('abv'),
    R.map(id => getCardById(state, id))
  )(state.favor)

  return sum
}