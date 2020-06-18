import {
  LOGIN_USER,
  LOGOUT_USER
} from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        userAuth: action.payload,
        userId: action.payloadId
      }
    case LOGOUT_USER:
      console.log('LOGOUT TIME')
      return {
        ...state,
        userAuth: null,
        userId: null
      }
    default:
      return state
  }
}