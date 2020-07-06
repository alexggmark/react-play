import React from 'react'
import { connect } from 'react-redux'
import { logoutAction } from '../redux/actions/login.actions'

const Logout = (props) => {
  const logout = () => {
    props.logoutApi()
  }

  return (
    <>
      {props.userAuth ? (
        <>
          <div>User logged in: {props.userAuth[2]}</div>
          <button onClick={() => logout()}>Logout</button>
        </>
      ) : null}
    </>
  )
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth
})

const mapDispatchToProps = (dispatch) => ({
  logoutApi: () => dispatch(logoutAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Logout)