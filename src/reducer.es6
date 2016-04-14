const initialState = {}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SUBMIT_FORM':
      return { error: `Name ${payload} is invalid` }
    default:
      return state
  }
}
