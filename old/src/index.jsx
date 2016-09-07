import './main.css'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { syncHistoryWithStore } from 'react-router-redux'
import { Router, browserHistory } from 'react-router'
import routes from './routes'
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

const root = (
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>
)

render(root, document.getElementById('prototype'))
