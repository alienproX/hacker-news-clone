const constants = require('../constants');

const initialState = {}

function update(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_NEWS:

		const newsList = state.newsList ? state.newsList : []
		const newsListLength = newsList.length + 1
		action.json.map(function (item,index) {
			newsList.push(
			{
				index:index+newsListLength,
				id: item.id,
				by: item.by,
				descendants: item.descendants,
				score: item.score,
				time: item.time,
				title: item.title,
				type: item.type,
				url: item.url
			}
			)
		})

		return Object.assign({}, state, { newsList: newsList,start:action.start+1 } )

		case constants.NO_MORE_NEWS:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

module.exports = update;
