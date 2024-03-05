
const initState = {
  name: "moin",
  email: "developer"

}

const characterReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        name: action.payload
      }

    case 'CHANGE_EMAIL':
      return {
        ...state,
        email: action.payload
      }

    default:
      return state
  }
}

export default characterReducer;