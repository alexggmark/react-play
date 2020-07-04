import React from 'react'
import { connect } from 'react-redux'
import {
  EDIT_CURRENT
} from '../redux/constants/actions.constants'

const Sidebar = (props) => {
  const editCurrent = (id) => {
    props.dispatch({
      type: EDIT_CURRENT,
      payload: id
    })
  }

  return (
    <div className="sidebar">
      <h1>Sidebar</h1>
      <p>User Auth: {props.userAuth}</p>
      <p>{props.notesData && 'Notes in state'}</p>
      {props.notesData && props.userAuth ?
        props.notesData.map((item, index) => {
          return (
            <li key={'sidebarNote-' + index}>{item.title}<button onClick={() => editCurrent(item._id)}>Edit</button></li>
          )
        })
      : ''}
    </div>
  )
}

const mapStateToProps = ({ Login, Notes }) => ({
  userAuth: Login.userAuth,
  notesData: Notes.notesData
})

export default connect(mapStateToProps)(Sidebar)