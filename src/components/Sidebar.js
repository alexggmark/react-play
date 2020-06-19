import React from 'react'
import { connect } from 'react-redux'
import {
  EDIT_CURRENT
} from '../constants/actions'

class Sidebar extends React.Component {
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
        {this.props.notesData ?
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

const mapStateToProps = ({ Notes }) => ({
  notesData: Notes.notesData
})

export default connect(mapStateToProps)(Sidebar)