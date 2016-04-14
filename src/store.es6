import { combineReducers, createStore, applyMiddleware } from 'redux'
import { routerReducer } from 'react-router-redux'
import reducer from './reducer'
// import mouseflow from './middleware/mouseflow'
// import raven from './middleware/raven'

const reducers = combineReducers({
  data: reducer,
  routing: routerReducer
})

const middleware = [
//  mouseflow,
//  raven
]

const createStoreWithMiddleware = applyMiddleware(...middleware)(createStore)
export default createStoreWithMiddleware(reducers)
