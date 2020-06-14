import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      userName: '',
      userPassword: ''
    }
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
      console.log(res)
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
        <span>Output: {this.state.userName}</span>
        <span>Output: {this.state.userPassword}</span>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))