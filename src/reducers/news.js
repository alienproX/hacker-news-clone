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

		const newsList = state.newsList ? state.newsList : []

		arrayPush(action.json, newsList)

		return Object.assign({}, state, { newsList: newsList,start:action.start+1 } )

		case constants.NO_MORE_NEWS:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}


function newestList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_NEWEST:

		const newestList = state.newestList ? state.newestList : []

		arrayPush(action.json, newestList)

		return Object.assign({}, state, { newestList: newestList,start:action.start+1 } )

		case constants.NO_MORE_NEWEST:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

function showList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_SHOW:

		const showList = state.showList ? state.showList : []

		arrayPush(action.json, showList)

		return Object.assign({}, state, { showList: showList,start:action.start+1 } )

		case constants.NO_MORE_SHOW:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

function askList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_ASK:

		const askList = state.askList ? state.askList : []

		arrayPush(action.json, askList)

		return Object.assign({}, state, { askList: askList,start:action.start+1 } )

		case constants.NO_MORE_ASK:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

function jobsList(state = initialState, action) {

	switch (action.type) {

		case constants.RECEIVE_JOBS:

		const jobsList = state.jobsList ? state.jobsList : []

		arrayPush(action.json, jobsList)

		return Object.assign({}, state, { jobsList: jobsList,start:action.start+1 } )

		case constants.NO_MORE_JOBS:

		return Object.assign({}, state, { noMoreNews: true} )

		default:
		return state
	}
}

module.exports = {newsList, newestList, showList, askList, jobsList}
