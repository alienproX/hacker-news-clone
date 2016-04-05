const constants = require('../constants');

const initialState = {}

function update(state = initialState, action) {

  switch (action.type) {

    case constants.RECEIVE_NEWEST:

    const newestList = state.newestList ? state.newestList : []

    action.json.map(function (item) {
      newestList.push(
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

    return Object.assign({}, state, { newestList: newestList,start:action.start+1 } )

    case constants.NO_MORE_NEWEST:

    return Object.assign({}, state, { noMoreNews: true} )

    default:
    return state
  }
}

module.exports = update;
