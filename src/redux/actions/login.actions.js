import axios from 'axios'
import storage from '../../utils/storageSetGet'
import {
  API_URL,
  LOGIN_USER
} from '../constants/actions.constants'
import { getNotes } from './notes.actions'

export const loginAction = (username, password) => {
  console.log('Action: login action')
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        userName: username,
        userPassword: password
      })

      dispatch(sendLoginToStore(res.data))
      dispatch(getNotes([res.data.token, res.data.user._id]))

      storage.set(res.data.token, res.data.user._id)
    } catch (err) {
      console.error(err)
    }
  }
}

const sendLoginToStore = (data) => {
  return {
    type: LOGIN_USER,
    payload: data.token,
    payloadId: data.user._id
  }
}
