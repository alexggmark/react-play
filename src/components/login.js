import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import {
  LOGIN_USER
} from '../constants/actions'
import storageSetGet from '../utils/storageSetGet'

class Login extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userPassword: '',
      localStorage: new storageSetGet()
    }
  }

  componentDidMount () {
    console.log(this.state.localStorage.get())
  }

  handleInputChange = (event, input) => {
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

      this.state.localStorage.set(res.data.token)
    } catch (err) {
      console.error(err)
    }
  }

  setStoreAuth () {

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
        {this.props.userAuth ? (
          <div>User logged in: {this.props.userAuth}</div>
        ) : <div>User NOT logged in!</div>}
        {this.state.localStorage.get() ?
          'Local storage ' + this.state.localStorage.get() :
          'No local storage'
        }
      </div>
    )
  }
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth
})

export default connect(mapStateToProps)(Login)