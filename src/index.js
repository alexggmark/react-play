import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Login from './components/login'
import Register from './components/register'
import Notes from './components/notes'
import Sidebar from './components/sidebar'
import './index.scss'

const App = () => {
  return (
    <div className="notes-app">
      <div className="notes-app__sidebar">
        <Login />
        <Register />
        <Sidebar />
      </div>
      <div className="notes-app__main">
        <Notes />
      </div>
    </div>
  )
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'))