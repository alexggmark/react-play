import axios from 'axios'
import storage from '../../utils/storageSetGet'
import {
  API_URL,
  LOGIN_USER
} from '../constants/actions.constants'

export const loginAction = (username, password) => {
  console.log('Running action')
  return async (dispatch) => {
    try {
      const res = await axios.post(`${API_URL}/login`, {
        userName: username,
        userPassword: password
      })

      dispatch(sendLoginToStore(res.data))

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
