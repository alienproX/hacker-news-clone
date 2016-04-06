import fetch from 'isomorphic-fetch'
const constants = require('../constants')
const API = constants.API
const count = 25
let existTop = null
let existNew = null
let existAsk = null
let existShow = null
let existJobs = null

function fetchType(type){

  switch (type) {

    case 'newest':
    return {
      existArray: existNew,
      apiPath: existNew ? existNew : fetch(`${API}newstories.json`)
      .then(function(res){
        let idsArray = res.json()
        existNew = idsArray
        return idsArray
      }),
      receiveAction: constants.RECEIVE_NEWEST,
      nomoreAction: constants.NO_MORE_NEWEST
    }

    case 'show':
    return {
      existArray: existShow,
      apiPath: existShow ? existShow : fetch(`${API}showstories.json`)
      .then(function(res){
        let idsArray = res.json()
        existShow = idsArray
        return idsArray
      }),
      receiveAction: constants.RECEIVE_SHOW,
      nomoreAction: constants.NO_MORE_SHOW
    }

    case 'ask':

    return {
      existArray: existAsk,
      apiPath: existAsk ? existAsk : fetch(`${API}askstories.json`)
      .then(function(res){
        let idsArray = res.json()
        existAsk = idsArray
        return idsArray
      }),
      receiveAction: constants.RECEIVE_ASK,
      nomoreAction: constants.NO_MORE_ASK


    }

    default:
    return {
      existArray: existTop,
      apiPath: existTop ? existTop : fetch(`${API}topstories.json`)
      .then(function(res){
        let idsArray = res.json()
        existTop = idsArray
        return idsArray
      }),
      receiveAction: constants.RECEIVE_NEWS,
      nomoreAction: constants.NO_MORE_NEWS
    }
  }
}

function fetchNews(times, type) {
  let start = times ? times*count : 0

  return dispatch => {
    fetchType(type).apiPath
    .then(res=>Promise.all(res.slice(start, start+count).map(item => fetch(`${API}item/${item}.json`))))
    .then(res=>Promise.all(res.map(item =>item.json())))
    .then(json=>dispatch(receiveNews(json,start/count,type)))
  }
}

function receiveNews(json, start, type) {
  if(json.length > 0){
    return {
      type: fetchType(type).receiveAction,
      json: json,
      start: start
    }
  }
  else{
    return {
      type: fetchType(type).nomoreAction
    }
  }
}


module.exports = { fetchNews, receiveNews }
