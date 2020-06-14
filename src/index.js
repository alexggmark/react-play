import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Store } from './store'
import Login from './components/login'
import Notes from './components/notes'

class App extends React.Component {
  render () {
    return (
      <>
        <Login />
        <Notes />
      </>
    )
  }
}

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root'))