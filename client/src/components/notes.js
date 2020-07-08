import React, { useState, useEffect } from 'react'
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
    <div className="error">Don't leave input empty!</div>
  )
}

const GetNoteCurrent = (props) => {
  return (
    <div className="notes__editing">
      <h1>{props.noteCurrent ? props.noteCurrent.title : null}</h1>
      {props.editingState ?
        <>
          <input
            onChange={(event) => props.handleInputChange(event, 'editingContent')}
            placeholder={props.noteCurrent && props.noteCurrent.content}
            type="text"
          />
          <button onClick={() => props.toggleEditing()}>Cancel</button>
          <button onClick={() => props.saveEdit(props.noteCurrent._id)}>Save</button>
        </> : <>
        <p>{props.noteCurrent ? props.noteCurrent.content : null}</p>
        <button onClick={() => props.toggleEditing()}>Edit</button>
        <button onClick={() => props.deleteNote(props.noteCurrent._id)}>Delete</button>
      </>}
    </div>
  )
}

const Notes = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)
  const [editingState, setEditingState] = useState(false)
  const [editingContent, setEditingContent] = useState('')
  const [currentNote, setCurrentNote] = useState(null)

  useEffect(() => {
    let current = props.notesData ? props.notesData.find((item) => {
      return item._id === props.noteCurrent
    }) : null
    setCurrentNote(current)
  }, [props])


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
        {currentNote ? (
          <CSSTransition
            in={true}
            timeout={200}
            classNames="my-node"
            appear={true}
            mountOnEnter
            unmountOnExit
          >
            <GetNoteCurrent
              noteCurrent={currentNote}
              editingState={editingState}
              handleInputChange={handleInputChange}
              toggleEditing={toggleEditing}
              saveEdit={saveEdit}
              deleteNote={props.deleteNote}
            >
            </GetNoteCurrent>
          </CSSTransition>
        ) : null}
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