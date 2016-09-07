import { combineReducers, compose, createStore, applyMiddleware } from 'redux'
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

const devTools = window.devToolsExtension ? window.devToolsExtension() : (f) => f

export default createStore(reducers, compose(applyMiddleware(...middleware), devTools))
