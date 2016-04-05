import fetch from 'isomorphic-fetch'
const constants = require('../constants')
const API = constants.API
const count = 25
let existTop = null
let existNew = null

function fetchNews(times, newest) {
  let start = times ? times*count : 0
  if(start >= existTop && !newest && existTop){
    return moMoreNews()
  }
  if(start >= existNew && newest && existNew){
    return moMoreNews(newest)
  }
  let ajaxTop = existTop ? existTop:fetch(`${API}topstories.json`)
  .then(function(res){
    let idsArray = res.json()
    existTop = idsArray
    return idsArray
  })
  let ajaxNew = existNew ? existNew:fetch(`${API}newstories.json`)
  .then(function(res){
    let idsArray = res.json()
    existNew = idsArray
    return idsArray
  })
  return dispatch => {
    (newest ? ajaxNew : ajaxTop)
    .then(res=>Promise.all(res.slice(start, start+count).map(item => fetch(`${API}item/${item}.json`))))
    .then(res=>Promise.all(res.map(item =>item.json())))
    .then(json => dispatch(receiveNews(json,start/count,newest)))
  }
}

function receiveNews(json, start, newest) {
  return {
    type: (newest ? constants.RECEIVE_NEWEST : constants.RECEIVE_NEWS),
    json: json,
    start: start
  }
}

function moMoreNews(newest) {
  return {
    type: (newest ? constants.NO_MORE_NEWEST : constants.NO_MORE_NEWS)
  }
}

module.exports = { fetchNews, receiveNews }
