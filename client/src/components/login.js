import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginAction, loginStorageAction, logoutAction } from '../redux/actions/login.actions'
import {
  USER_REGISTER
} from '../redux/constants/actions.constants'

const Login = (props) => {
  const [username, setUsername] = useState(null)
  const [password, setPassword] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    props.loginStorageApi(props.userAuth)
  }, [props])

  const resetState = () => {
    setError(false)
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

  const loginApi = () => {
    if (!username || !password) {
      setError(true)
      return
    }
    props.loginApi(username, password, resetState)
  }

  // const logout = () => {
  //   props.logoutApi()
  // }

  const toggleRegister = (bool) => {
    props.dispatch({
      type: USER_REGISTER,
      payload: bool
    })
  }

  return (
    <div className="login">
      {!props.userAuth && !props.userRegister ? (
        <>
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
          {error && (
            <div className="error">Please enter username/password</div>
          )}
          <button onClick={() => toggleRegister(true)}>Register new user</button>
          {props.userRegistrationSuccess ? <p>Registration successful!</p> : null}
        </>
      ) : null}
      {/* {props.userAuth ? (
        <>
          <div>User logged in: {props.userAuth[2]}</div>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : null} */}
    </div>
  )
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth,
  userRegister: Login.userRegister,
  userRegistrationSuccess: Login.userRegistrationSuccess
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (callback) => dispatch(callback),
  loginApi: (username, password, callback) => dispatch(loginAction(username, password, callback)),
  loginStorageApi: (auth) => dispatch(loginStorageAction(auth)),
  logoutApi: () => dispatch(logoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)