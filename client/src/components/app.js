import React from 'react'
import { connect } from 'react-redux'
import Login from './login'
import Logout from './logout'
import Register from './register'
import Notes from './notes'
import Sidebar from './sidebar'
import './app.scss'

const LandingGate = () => {
  return (
    <div className="landing-gate">
      <h1>Login</h1>
      <Login />
      <Register />
    </div>
  )
}

const LoggedIn = () => {
  return (
    <div className="notes-app">
      <div className="notes-app__sidebar">
        <Logout />
        <Sidebar />
      </div>
      <div className="notes-app__main">
        <Notes />
      </div>
    </div>
  )
}

const App = (props) => {
  return (
    <>
      {props.userAuth ? (
        <LoggedIn />
      ) : (
        <LandingGate />
      )}
    </>
  )
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth
})

export default connect(mapStateToProps)(App)