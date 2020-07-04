import React, { useState } from 'react'
import { connect } from 'react-redux'
import { asyncGetNotes, asyncSendNote, asyncDeleteNote } from '../redux/actions/notes.actions'

const Error = () => {
  return (
    <div>Must be logged in and message mustn't be empty!</div>
  )
}

const Notes = (props) => {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [error, setError] = useState(false)

  // const getData = () => {
  //   props.getNotes(props.userAuth)
  // }

  const getNoteCurrent = (id) => {
    if (!props.notesData) { return }

    const current = props.notesData.find((item) => {
      return item._id === id
    })

    console.log('State: notesdata')
    console.log(props.notesData)

    return (
      <div>
      {current ?
        <span>
          <h1>{current.title}</h1>
          <p>{current.content}</p>
          <button onClick={() => props.deleteNote(current._id)}>X</button>
        </span>
      : ''}
      </div>
    )
  }

  const handleInputChange = (event, input) => {
    switch (input) {
      case 'title':
        setTitle(event.target.value)
        break
      case 'content':
        setContent(event.target.value)
        break
      default:
        console.log('Nothing')
    }
  }

  // const deleteNote = async (id) => {
  //   try {
  //     await axios.delete(`https://localhost:3000/notesDelete/${id}`)
  //     getData()
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

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

    console.log(props.userAuth)

    props.sendNote(title, content, props.userAuth[1])
  }

  return (
    <div className="notes">
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
          Submit
        </button>
      </div>
      {error && <Error />}
      <div>
        {props.userAuth && getNoteCurrent(props.noteCurrent)}
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
  deleteNote: (id) => dispatch(asyncDeleteNote(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Notes)