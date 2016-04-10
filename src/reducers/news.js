const constants = require('../constants');

const initialState = {}

function arrayPush(data, array){
	data.map(function (item,index) {
		array.push(
			{
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
}

function newsList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_NEWS:

		let newsList = state.newsList && action.start > 0 ? state.newsList : []

		arrayPush(action.json, newsList)

		return Object.assign({}, state, { newsList: newsList, start:action.start+1, created:action.created } )

		case constants.NO_MORE_NEWS:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}


function newestList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_NEWEST:

		let newestList = state.newestList && action.start > 0 ? state.newestList : []

		arrayPush(action.json, newestList)

		return Object.assign({}, state, { newestList: newestList, start:action.start+1, created:action.created } )

		case constants.NO_MORE_NEWEST:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

function showList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_SHOW:

		let showList = state.showList && action.start > 0 ? state.showList : []

		arrayPush(action.json, showList)

		return Object.assign({}, state, { showList: showList, start:action.start+1, created:action.created } )

		case constants.NO_MORE_SHOW:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

function askList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_ASK:

		let askList = state.askList && action.start > 0 ? state.askList : []

		arrayPush(action.json, askList)

		return Object.assign({}, state, { askList: askList, start:action.start+1, created:action.created } )

		case constants.NO_MORE_ASK:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

function jobsList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_JOBS:

		let jobsList = state.jobsList && action.start > 0 ? state.jobsList : []

		arrayPush(action.json, jobsList)

		return Object.assign({}, state, { jobsList: jobsList, start:action.start+1, created:action.created } )

		case constants.NO_MORE_JOBS:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

module.exports = {newsList, newestList, showList, askList, jobsList}
