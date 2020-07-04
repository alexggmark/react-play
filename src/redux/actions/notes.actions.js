import axios from 'axios'
import {
  API_URL,
  COMPILE_NOTES,
  ADD_NOTE
} from '../constants/actions.constants'

export const getNotes = (auth) => {
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

export const sendNote = (title, content, auth) => {
  console.log('Action: send note')
  return async (dispatch) => {
    try {
      await axios.post('https://localhost:3000/notesPost', {
        userString: auth,
        title,
        content
      })
      dispatch(addNote({ title, content }))
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