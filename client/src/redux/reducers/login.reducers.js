import {
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR,
  USER_REGISTER,
  USER_REGISTER_SUCCESS
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
    case USER_REGISTER_SUCCESS:
      return {
        ...state,
        userRegistrationSuccess: action.payload
      }
    case LOGIN_ERROR:
      return {
        ...state,
        loginError: action.payload
      }
    default:
      return state
  }
}