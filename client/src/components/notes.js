import React, { useState } from 'react'
import { connect } from 'react-redux'
import {
  asyncGetNotes,
  asyncSendNote,
  asyncDeleteNote,
  asyncUpdateNote } from '../redux/actions/notes.actions'
import { CSSTransition } from 'react-transition-group'
import './notes.scss'

const Error = () => {
  return (
    <div>Message mustn't be empty!</div>
  )
}

const Notes = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)
  const [editingState, setEditingState] = useState(false)
  const [editingContent, setEditingContent] = useState('')

  const getNoteCurrent = (id) => {
    if (!props.notesData) { return }

    let current = null
    current = props.notesData.find((item) => {
      return item._id === id
    })

    return (
      <CSSTransition
        in={current ? true : false}
        timeout={200}
        classNames="my-node"
        mountOnEnter
        unmountOnExit
      >
        <div className="notes__editing">
          <h1>{current ? current.title : 'BYE BYE!'}</h1>
          {editingState ?
            <>
              <input
                onChange={(event) => handleInputChange(event, 'editingContent')}
                placeholder={current && current.content}
                type="text"
              />
              <button onClick={() => toggleEditing()}>Cancel</button>
              <button onClick={() => saveEdit(current._id)}>Save</button>
            </> : <>
            <p>{current ? current.content : 'BYE BYE!'}</p>
            <button onClick={() => toggleEditing()}>Edit</button>
            <button onClick={() => props.deleteNote(current._id)}>Delete</button>
          </>}
        </div>
      </CSSTransition>
    )
  }

  const toggleEditing = () => {
    setEditingState(!editingState)
  }

  const saveEdit = (id) => {
    if (!editingContent) { return }

    props.editNote(id, editingContent)
    toggleEditing(false)
  }

  const handleInputChange = (event, input) => {
    switch (input) {
      case 'title':
        setTitle(event.target.value)
        break
      case 'content':
        setContent(event.target.value)
        break
      case 'editingContent':
        setEditingContent(event.target.value)
        break
      default: // Do nothing
    }
  }

  const sendPost = async () => {
    if (error) {
      setError(false)
    }

    if (!props.userAuth) {
      setError(true)
      return
    }

    if (!title || !content) {
      setError(true)
      return
    }

    props.sendNote(title, content, props.userAuth[1])
  }

  return (
    <div className="notes">
      {props.userAuth ? (
      <div>
        <h2>Input Area</h2>
        <input
          placeholder="Title"
          onChange={(event) => handleInputChange(event, 'title')}
          type="text"
        />
        <input
          placeholder="Content"
          onChange={(event) => handleInputChange(event, 'content')}
          type="text"
        />
        <button onClick={() => sendPost()}>
          Add note
        </button>
      </div>
      ) : 'Login to edit notes!'}
      {error && <Error />}
      <div>
        {getNoteCurrent(props.noteCurrent)}
      </div>
    </div>
  )
}

const mapStateToProps = ({ Login, Notes }) => ({
  userAuth: Login.userAuth,
  notesData: Notes.notesData,
  noteCurrent: Notes.currentNote
})

const mapDispatchToProps = (dispatch) => ({
  getNotes: (auth) => dispatch(asyncGetNotes(auth)),
  sendNote: (title, content, auth) => dispatch(asyncSendNote(title, content, auth)),
  deleteNote: (id) => dispatch(asyncDeleteNote(id)),
  editNote: (id, content) => dispatch(asyncUpdateNote(id, content))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes)