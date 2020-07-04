import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { loginAction, loginStorageAction, logoutAction } from '../redux/actions/login.actions'

const Login = (props) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    props.loginStorageApi(props.userAuth)
  }, [props])

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
    props.logoutApi()
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
            <div>User logged in: {props.userAuth[2]}</div>
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
  loginApi: (username, password) => dispatch(loginAction(username, password)),
  loginStorageApi: (auth) => dispatch(loginStorageAction(auth)),
  logoutApi: () => dispatch(logoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Login)