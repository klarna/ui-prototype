import raven from 'raven-js'

const actions = []
let state,
  prevState

const ravenURL = '#TODO add your Raven URL here'

raven.config(ravenURL, {
  dataCallback: (data) => {
    data.extra = {actions, prevState, state}
    return data
  }
}).install()

window.addEventListener('unhandledrejection', function (err) {
  raven.captureException(err.reason)
})

export default (store) => (next) => (action) => {
  prevState = store.getState()
  actions.push({...action, timestamp: (new Date()).toJSON()})
  const response = next(action)
  state = store.getState()
  return response
}
