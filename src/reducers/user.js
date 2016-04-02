const constants = require('../constants');

const initialState = {}

function getUser(state = initialState, action) {

  switch (action.type) {

    case constants.RECEIVE_USER:

    return Object.assign({}, state, { user: action.json, created:action.created} )

    default:
    return state
  }
}

module.exports = getUser;
