import store from './store'

export function submitForm (formData) {
  store.dispatch({
    type: 'SUBMIT_FORM',
    payload: formData
  })
}

export function typeName (name) {
  store.dispatch({
    type: 'TYPE_NAME',
    payload: name
  })
}

export function add () {
  store.dispatch({
    type: 'ADD'
  })
}
