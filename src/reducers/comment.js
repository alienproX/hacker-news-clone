const constants = require('../constants');

const initialState = {}

function getComment(state = initialState, action) {

  switch (action.type) {

    case constants.RECEIVE_COMMENT:

    return Object.assign({}, state, { comments: action.json, created:action.created} )

    default:
    return state
  }
}

module.exports = getComment;
