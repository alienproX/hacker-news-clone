import fetch from 'isomorphic-fetch'
const constants = require('../constants')
const API = constants.API

function fetchUser(id) {
	return dispatch => {
		return fetch(`${API}user/${id}.json` )
			.then(req => req.json())
			.then(json => dispatch(receiveUser(json)))
	}
}

function receiveUser(json, start) {
	return {
		type: constants.RECEIVE_USER,
		json: json
	}
}

module.exports = { fetchUser, receiveUser }
