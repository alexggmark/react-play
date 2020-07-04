import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'
import Login from './reducers/login.reducers'
import Notes from './reducers/notes.reducers'

const rootReducer = combineReducers({
  Login,
  Notes
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
)

export default store