const initialState = {
  grid: false,
  error: {}
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'TOGGLE_GRID':
      const grid = !state.grid
      return { ...state, grid }
    case 'PHONE_ERROR':
      return { ...state, error: { phone: 'Invalid phone' } }
    case 'EMAIL_ERROR':
      return { ...state, error: { email: 'Invalid email' } }
    case 'SUBMIT_FORM':
      return { ...state, error: `Name ${payload} is invalid` }
    default:
      return state
  }
}
