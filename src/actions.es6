import store from './store'
import { hashHistory } from 'react-router'

export function submitForm (e) {
  e.preventDefault()
  const phone = e.target.phone.value
  const email = e.target.email.value

  if (phone.length < 8) {
    return store.dispatch({type: 'PHONE_ERROR'})
  }

  if (!email.match(/^\w+@\w+\.com$/)) {
    return store.dispatch({type: 'EMAIL_ERROR'})
  }

  hashHistory.push('bank_accounts')
}
