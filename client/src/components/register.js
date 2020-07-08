import React, { useState } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import {
  API_URL,
  USER_REGISTER,
  USER_REGISTER_SUCCESS,
  LOGIN_ERROR
} from '../redux/constants/actions.constants'
import { AnimateEnter } from './animations'

const Register = (props) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [registerEmpty, setRegisterEmpty] = useState(false)

  const resetState = () => {
    setUsername(null)
    setPassword(null)
  }

  const handleInputChange = (event, input) => {
    switch (input) {
      case 'name':
        setUsername(event.target.value)
        break
      case 'pass':
        setPassword(event.target.value)
        break
      default:
        break
    }
  }

  const registerApi = async () => {
    if (!username || !password) {
      setRegisterEmpty(true)
      return
    }

    setRegisterEmpty(false)

    try {
      await axios.post(`${API_URL}/createUser`, {
        userName: username,
        userPassword: password
      })

      resetState()
      toggleRegister(false)

      props.dispatch({
        type: USER_REGISTER_SUCCESS,
        payload: true
      })
      props.dispatch({
        type: LOGIN_ERROR,
        payload: false
      })
    } catch (err) {
      console.error(err)
    }
  }

  const toggleRegister = (bool) => {
    props.dispatch({
      type: USER_REGISTER,
      payload: bool
    })
  }

  return (
    <>
      {props.userRegister && (
        <div className="register">
          <input
            onChange={(event) => handleInputChange(event, 'name')}
            placeholder="User name"
            type="text"
          />
          <input
            onChange={(event) => handleInputChange(event, 'pass')}
            placeholder="Password"
            type="text"
          />
          {registerEmpty ? (
            <AnimateEnter>
              <div className="error">Don't leave inputs empty!</div>
            </AnimateEnter>
          ) : null}
          <button onClick={() => registerApi()}>Register</button>
          <button onClick={() => toggleRegister(false)}>Cancel</button>
        </div>
      )}
    </>
  )
}

const mapStateToProps = ({ Login }) => ({
  userRegister: Login.userRegister,
  userRegistrationSuccess: Login.userRegistrationSuccess
})


export default connect(mapStateToProps)(Register)
