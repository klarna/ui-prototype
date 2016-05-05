const initialState = {
  name: '',
  error: null,
  count: 0
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SUBMIT_FORM':
      return { ...state, error: `Name ${payload} is invalid` }
    case 'TYPE_NAME':
      return { ...state, name: payload }
    case 'ADD':
      return { ...state, count: state.count + 1 }
    default:
      return state
  }
}
