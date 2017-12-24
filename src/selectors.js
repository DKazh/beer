import * as R from 'ramda'

export const getCardById = (state, id) => R.prop(id, state.cards)

export const getCards = state => { 
	const cards = R.map(id => getCardById(state, id), state.cardsList.ids)
  	return cards 
}

export const getRenderedCount = state => R.length(state.cardsList.ids)