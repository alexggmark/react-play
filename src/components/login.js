import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  LOGOUT_USER,
  CLEAR_NOTES
} from '../redux/constants/actions.constants'
import { loginAction } from '../redux/actions/login.actions'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

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

  const loginApi = () => {
    props.loginApi(username, password)
  }

  const logout = () => {
    props.dispatch({
      type: LOGOUT_USER
    })
    props.dispatch({
      type: CLEAR_NOTES
    })
  }

  return (
    <div className="app">
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
      <button onClick={() => loginApi()}>Login</button>
      <button onClick={() => logout()}>Logout</button>
      {
        props.userAuth ?
          (
            <div>User logged in: {props.userAuth}</div>
          ) :
            <div>User NOT logged in!</div>
      }
    </div>
  )
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth
})

const mapDispatchToProps = (dispatch) => ({
  loginApi: (username, password) => dispatch(loginAction(username, password))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)