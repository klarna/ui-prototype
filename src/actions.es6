import store from './store'

export function submitForm (formData) {
  store.dispatch({
    type: 'SUBMIT_FORM',
    payload: formData
  })
}
