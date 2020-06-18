import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store'
import Login from './components/Login'
import Register from './components/Register'
import Notes from './components/Notes'
import './index.scss'

class App extends React.Component {
  render () {
    return (
      <div className="notes-app">
        <div className="notes-app__sidebar">
          <Login />
          <Register />
        </div>
        <div className="notes-app__main">
          <Notes />
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'))