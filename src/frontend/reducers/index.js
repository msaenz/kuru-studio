import { bindActionCreators } from "redux"

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
      return state
    default:
      return state
  }
}

export default reducer