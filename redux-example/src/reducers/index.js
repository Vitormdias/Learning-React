import { combineReducers } from 'redux'
import { DEPOSIT, WITHDRAW } from '../actions'

let initialState = {
  value: 50
}

const cashOperation = (state = initialState, action) => {
  const parsedValue = parseInt(action.value, 10) || 0;

  switch (action.type) {
    case DEPOSIT:
      return Object.assign({}, state, { value: state.value + parsedValue })
    case WITHDRAW:
      return Object.assign({}, state, { value: state.value - parsedValue })
    default:
      return state
  }
}

const reducer = combineReducers({
  cashOperation
})

export default reducer
