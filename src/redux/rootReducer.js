import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import counter from './modules/counter'
import List from './List/List'

export default combineReducers({
  counter,
  router,
  List
})
