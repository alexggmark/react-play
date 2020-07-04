import {
  LOGIN_USER,
  LOGOUT_USER
} from '../constants/actions.constants'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userAuth: [action.payload, action.payloadId]
      }
    case LOGOUT_USER:
      return {
        ...state,
        userAuth: null,
        userId: null
      }
    default:
      return state
  }
}