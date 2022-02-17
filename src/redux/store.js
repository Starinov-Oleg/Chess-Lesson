import { createStore } from 'redux'
import { combineReducers } from 'redux'
import eventReducer from './reducer/event-reducer'
const reducer = combineReducers({
  eventReducer,
})
const store = createStore(reducer)

export default store
