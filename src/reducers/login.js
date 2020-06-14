import {
  LOGIN_USER
} from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userAuth: action.payload
      }
    default:
      return state
  }
}