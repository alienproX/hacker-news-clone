import fetch from 'isomorphic-fetch'
const constants = require('../constants')
import Promise from 'bluebird'
const API = constants.API
let comment = null

function moreComment(array, parent) {

  return Promise.all(array.map(item => fetch(`${API}item/${item}.json`)))
  .then(res=>Promise.all(res.map(item =>item.json())))
  .then(function (json) {
   parent.kids = json
   if (json) {
     return Promise.map(json, function (item) {
       if (item.kids) {
         return moreComment(item.kids, item)
       }
       return item
     })
   }
 })

}

function fetchComment(id) {
  return dispatch => {
    return fetch(`${API}item/${id}.json` )
    .then(req => req.json())
    .then(function(json){
      comment = json
      if(json.kids){
        moreComment(json.kids,comment).then(function (data) {

					return dispatch(receiveComment(comment))
        })
      }
			else{
				return dispatch(receiveComment(json))
			}

    })
  }
}

function receiveComment(json) {
  return {
    type: constants.RECEIVE_COMMENT,
    json: json,
    created: Date.now()
  }
}

module.exports = { fetchComment, receiveComment }
