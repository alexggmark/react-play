import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store'
import Login from './components/Login'
import Register from './components/Register'
import Notes from './components/Notes'

class App extends React.Component {
  render () {
    return (
      <>
        <Login />
        <Register />
        <Notes />
      </>
    )
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'))