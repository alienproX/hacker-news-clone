import fetch from 'isomorphic-fetch'
const constants = require('../constants')
const API = 'https://hacker-news.firebaseio.com/v0/'
const count = 25
let exist = null

function fetchNews(times) {
	let start = times ? times*count : 0
	if(start >= 500){
		return moMoreNews()
	}
	return dispatch => {
		let ajax = exist ? exist:fetch(`${API}topstories.json`)
		.then(function(res){
			let idsArray = res.json()
			exist = idsArray
			return idsArray
		})
		return ajax
		.then(res=>Promise.all(res.slice(start, start+count).map(item => fetch(`${API}item/${item}.json`))))
		.then(res=>Promise.all(res.map(item =>item.json())))
		.then(json => dispatch(receiveNews(json,start/count)))
	}
}

function receiveNews(json, start) {
	return {
		type: constants.RECEIVE_NEWS,
		json: json,
		start: start
	}
}

function moMoreNews() {
	return {
		type: constants.NO_MORE_NEWS
	}
}

module.exports = { fetchNews, receiveNews }
