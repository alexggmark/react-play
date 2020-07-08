import React from 'react'
import { connect } from 'react-redux'
import {
  EDIT_CURRENT
} from '../redux/constants/actions.constants'
import { asyncDeleteNote } from '../redux/actions/notes.actions'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import './sidebar.scss'

const Sidebar = (props) => {
  const editCurrent = (id) => {
    props.dispatch({
      type: EDIT_CURRENT,
      payload: id
    })
  }

  const deleteNote = (id) => {
    props.deleteNote(id)
  }

  return (
    <div className="sidebar">
      {props.userAuth ? (
        <>
          <h1>Your notes</h1>
          <p>{props.notesData && props.notesData.length === 0 ? (
            <div className="error">No notes yet!</div>
          ) : null}</p>
          {props.notesData ? (
            <ul className="sidebar__container">
              <TransitionGroup>
                {props.notesData.map((item, index) => {
                  return (
                    <CSSTransition
                      key={item._id}
                      timeout={500}
                      classNames="item"
                      appear={true}
                    >
                      <li
                        className="sidebar__item"
                      >
                        <span className="sidebar__item--1">
                          {item.title}
                        </span>
                        <button className="sidebar__item--2" onClick={() => editCurrent(item._id)}>View</button>
                        <button className="sidebar__item--3" onClick={() => deleteNote(item._id)}>Delete</button>
                      </li>
                    </CSSTransition>
                  )
                })}
              </TransitionGroup>
            </ul>
          ) : ''}
        </>
      ) : null}
    </div>
  )
}

const mapStateToProps = ({ Login, Notes }) => ({
  userAuth: Login.userAuth,
  notesData: Notes.notesData
})

const mapDispatchToProps = (dispatch) => ({
  dispatch: (callback) => dispatch(callback),
  deleteNote: (id) => dispatch(asyncDeleteNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
