import { combineReducers } from 'redux'
import { DEPOSIT, WITHDRAW } from '../actions'

let initialState = {
  value: 50
}

const cashOperation = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return Object.assign({}, state, { value: state.value + action.value })
    case WITHDRAW:
      return Object.assign({}, state, { value: state.value - action.value })
    default:
      return state
  }
}

const reducer = combineReducers({
  cashOperation
})

export default reducer
