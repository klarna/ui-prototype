import './main.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, hashHistory } from 'react-router'
import routes from './routes'
import store from './store'

const history = syncHistoryWithStore(hashHistory, store)

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

render(root, document.getElementById('prototype'))

window.onkeypress = (e) => {
  if (e.which === 103) {
    store.dispatch({
      type: 'TOGGLE_GRID'
    })
  }
}
