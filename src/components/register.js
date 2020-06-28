import React from 'react'
import axios from 'axios'
import sendInputToState from '../utils/sendInputToState'

export default class Register extends React.Component {
  constructor () {
    super ()
    this.state = {
      userName: '',
      userPassword: ''
    }
  }

  handleInputChange (event, name) {
    sendInputToState(event, name, this)
  }

  async registerApi () {
    try {
      await axios.post('https://localhost:3000/createUser', {
        userName: this.state.userName,
        userPassword: this.state.userPassword
      })

      console.log('Register success')
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <div className="register">
        <p>Current state: {this.state.userName} - {this.state.userPassword}</p>
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
        <button onClick={() => this.registerApi()}>Register</button>
      </div>
    )
  }
}
