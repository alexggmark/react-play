import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
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

  const registerApi = async () => {
    try {
      await axios.post('https://localhost:3000/createUser', {
        userName: username,
        userPassword: password
      })

      console.log('Register success')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div className="register">
      <p>Current state: {username} - {password}</p>
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
      <button onClick={() => registerApi()}>Register</button>
    </div>
  )
}

export default Register