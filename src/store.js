import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk  from 'redux-thunk'

import {users, filterName} from './containers/UsersPage/reducers'

const middlewares = [
  thunk
]

export const store = createStore(combineReducers({
  users,
  filterName,
}), applyMiddleware(...middlewares))
