import axios from 'axios'
import storage from '../../utils/storageSetGet'
import {
  API_URL,
  LOGIN_USER,
  LOGOUT_USER
} from '../constants/actions.constants'
import { asyncGetNotes, clearNotes } from './notes.actions'

export const loginAction = (username, password) => {
  console.log('Action: login action')
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        userName: username,
        userPassword: password
      })

      dispatch(sendLoginToStore([res.data.token, res.data.user._id, res.data.user.userName]))
      dispatch(asyncGetNotes([res.data.token, res.data.user._id]))

      storage.set(res.data.token, res.data.user._id, res.data.user.userName)
    } catch (err) {
      console.error(err)
    }
  }
}

export const loginStorageAction = (auth) => {
  console.log('Login storage action')
  return (dispatch) => {
    const userCredentials = storage.get()

    if (auth || !userCredentials) { return }

    console.log('No login in state + storage exists')
    console.log(userCredentials)

    dispatch(sendLoginToStore(userCredentials))
    dispatch(asyncGetNotes(userCredentials))
  }
}

export const logoutAction = () => {
  console.log('Action: logout')
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
