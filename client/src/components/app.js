import React, { createRef, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import Logo from './logo'
import Login from './login'
import Logout from './logout'
import Register from './register'
import Notes from './notes'
import Sidebar from './sidebar'
import { AnimateEnter } from './animations'
import './app.scss'
import './animations.scss'

const LandingGate = () => {
  let ref = createRef()

  return (
    <AnimateEnter>
      <div className="landing-gate" ref={ref}>
        <h1>Login</h1>
        <Login />
        <Register />
      </div>
    </AnimateEnter>
  )
}

const LoggedIn = (props) => {
  return (
    <AnimateEnter>
      <div className="notes-app">
        <div className="notes-app__sidebar">
          <Logout />
          <Sidebar />
        </div>
        <div className="notes-app__main">
          <Notes />
        </div>
      </div>
    </AnimateEnter>
  )
}

const App = (props) => {
  return (
    <>
      <Logo />
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