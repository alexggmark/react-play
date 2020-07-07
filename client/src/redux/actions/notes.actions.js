import axios from 'axios'
import {
  API_URL,
  COMPILE_NOTES,
  ADD_NOTE,
  UPDATE_NOTE,
  DELETE_NOTE,
  CLEAR_NOTES
} from '../constants/actions.constants'

export const asyncGetNotes = (auth) => {
  return async (dispatch) => {
    try {
      let response
      response = await axios.get(`${API_URL}/notesGetUser/${auth[1]}`, {
        headers: {
          'authorization': auth[0],
          'Accept' : 'application/json',
          'Content-Type': 'application/json'
        }
      })
      dispatch(compileNotes(response.data))
    } catch (err) {
      console.error(err)
    }
  }
}

export const asyncSendNote = (title, content, auth) => {
  return async (dispatch) => {
    try {
      let response
      response = await axios.post(`${API_URL}/notesPost`, {
        userString: auth,
        title,
        content
      })
      dispatch(addNote({
        title,
        content,
        _id: response.data._id
      }))
    } catch (err) {
      console.error(err)
    }
  }
}

export const asyncUpdateNote = (id, content) => {
  return async (dispatch) => {
    try {
      let response
      response = await axios.put(`${API_URL}/notesUpdate/${id}`, {
        content
      })
      dispatch(updateNote([id, response.data.content]))
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

const updateNote = (data) => {
  return {
    type: UPDATE_NOTE,
    payload: [...data]
  }
}

export const clearNotes = () => {
  return {
    type: CLEAR_NOTES
  }
}