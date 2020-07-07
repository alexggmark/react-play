import axios from 'axios'
import storage from '../../utils/storageSetGet'
import {
  API_URL,
  LOGIN_USER,
  LOGOUT_USER,
  LOGIN_ERROR
} from '../constants/actions.constants'
import { asyncGetNotes, clearNotes } from './notes.actions'

export const loginAction = (username, password, callback) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        userName: username,
        userPassword: password
      })

      dispatch(toggleLoginFail(false))

      dispatch(sendLoginToStore([res.data.token, res.data.user._id, res.data.user.userName]))
      dispatch(asyncGetNotes([res.data.token, res.data.user._id]))

      storage.set(res.data.token, res.data.user._id, res.data.user.userName)

      if (callback) callback()
    } catch (err) {
      dispatch(toggleLoginFail(true))
    }
  }
}

export const loginStorageAction = (auth) => {
  return (dispatch) => {
    const userCredentials = storage.get()

    if (auth || !userCredentials) { return }

    dispatch(sendLoginToStore(userCredentials))
    dispatch(asyncGetNotes(userCredentials))
  }
}

export const logoutAction = () => {
  return (dispatch) => {
    storage.clear()
    dispatch(sendLogoutToStore())
    dispatch(clearNotes())
  }
}

const sendLoginToStore = ([token, id, username]) => {
  return {
    type: LOGIN_USER,
    payload: token,
    payloadId: id,
    username
  }
}

const sendLogoutToStore = () => {
  return {
    type: LOGOUT_USER
  }
}

const toggleLoginFail = (bool) => {
  return {
    type: LOGIN_ERROR,
    payload: bool
  }
}
