import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const [auth, setAuth] = useState()

  return (
    <div className="app">
      <input type="text" placeholder="user name" />
      <input type="text" placeholder="password" />
      <button onClick={() => setAuth('test')}>Login</button>
      <h2>{auth}</h2>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))