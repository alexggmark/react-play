import {
  LOGIN_USER,
  LOGOUT_USER,
  USER_REGISTER
} from '../constants/actions.constants'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userAuth: [action.payload, action.payloadId, action.username]
      }
    case LOGOUT_USER:
      return {
        ...state,
        userAuth: null
      }
    case USER_REGISTER:
      return {
        ...state,
        userRegister: action.payload
      }
    default:
      return state
  }
}