import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  LOGIN_USER
} from '../constants/actions'
import storageSetGet from '../utils/storageSetGet'

const storage = new storageSetGet()

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userPassword: ''
    }
  }

  async getLoggedInUser () {
    console.log(storage.get())
    try {
      const response = await axios.get('https://localhost:3000/usersGet', {
        headers: {
          'authorization': storage.get(),
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  handleInputChange (event, input) {
    switch (input) {
      case 'name':
        this.setState({ userName: event.target.value })
        break
      case 'pass':
        this.setState({ userPassword: event.target.value })
        break
      default:
        console.log('Nothing')
    }
  }

  async loginApi () {
    try {
      const res = await axios.post('https://localhost:3000/login', {
        userName: this.state.userName,
        userPassword: this.state.userPassword
      })

      this.props.dispatch({
        type: LOGIN_USER,
        payload: res.data.token
      })

      storage.set(res.data.token)
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <div className="app">
        <input
          onChange={(event) => this.handleInputChange(event, 'name')}
          placeholder="User name"
          type="text"
        />
        <input
          onChange={(event) => this.handleInputChange(event, 'pass')}
          placeholder="Password"
          type="text"
        />
        <button onClick={() => this.loginApi()}>Login</button>
        {this.props.userAuth || storage.get() ? (
          <div>User logged in: {this.props.userAuth}</div>
        ) : <div>User NOT logged in!</div>}
        {storage.get() ?
          'Local storage ' + storage.get() :
          'No local storage'
        }
        <button onClick={() => this.getLoggedInUser()}>Console user</button>
      </div>
    )
  }
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth
})

export default connect(mapStateToProps)(Login)