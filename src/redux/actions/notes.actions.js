import axios from 'axios'
import {
  API_URL,
  COMPILE_NOTES,
  ADD_NOTE,
  DELETE_NOTE,
  CLEAR_NOTES
} from '../constants/actions.constants'

export const asyncGetNotes = (auth) => {
  console.log('Action: get notes')
  console.log(auth)
  return async (dispatch) => {
    try {
      let response;
      response = await axios.get(`${API_URL}/notesGetUser/${auth[1]}`, {
        headers: {
          'authorization': auth[0],
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
      dispatch(compileNotes(response.data))
      console.log('Action: success notes')
    } catch (err) {
      console.error(err)
    }
  }
}

export const asyncSendNote = (title, content, auth) => {
  console.log('Action: send note')
  return async (dispatch) => {
    try {
      await axios.post(`${API_URL}/notesPost`, {
        userString: auth,
        title,
        content
      })
      console.log('Action: successful note post')
      dispatch(addNote({ title, content }))
    } catch (err) {
      console.error(err)
    }
  }
}

export const asyncDeleteNote = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/notesDelete/${id}`)
      dispatch(deleteNote(id))
    } catch (err) {
      console.error(err)
    }
  }
}

const compileNotes = (data) => {
  console.log('Action: compile notes')
  return {
    type: COMPILE_NOTES,
    payload: data
  }
}

const addNote = (data) => {
  return {
    type: ADD_NOTE,
    payload: data
  }
}

const deleteNote = (id) => {
  return {
    type: DELETE_NOTE,
    payload: id
  }
}

export const clearNotes = () => {
  return {
    type: CLEAR_NOTES
  }
}