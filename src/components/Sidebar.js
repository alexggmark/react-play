import React from 'react'
import { connect } from 'react-redux'
import {
  EDIT_CURRENT
} from '../constants/actions'
import storageSetGet from '../utils/storageSetGet'

const storage = new storageSetGet()

class Sidebar extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      userAuth: props.userAuth || storage.get()
    }
  }

  editCurrent (id) {
    this.props.dispatch({
      type: EDIT_CURRENT,
      payload: id
    })
  }

  render () {
    return (
      <div className="sidebar">
        <h1>Sidebar</h1>
        <p>User Auth: {this.props.userAuth} - {storage.get()}</p>
        <p>{this.props.notesData && 'Notes in state'}</p>
        {this.props.notesData && this.state.userAuth ?
          this.props.notesData.map((item, index) => {
            return (
              <li key={'sidebarNote-' + index}>{item.title}<button onClick={() => this.editCurrent(item._id)}>Edit</button></li>
            )
          })
        : ''}
      </div>
    )
  }
}

const mapStateToProps = ({ Login, Notes }) => ({
  userAuth: Login.userAuth,
  notesData: Notes.notesData
})

export default connect(mapStateToProps)(Sidebar)