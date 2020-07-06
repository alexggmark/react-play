import {
  ADD_NOTE,
  CLEAR_NOTES,
  DELETE_NOTE,
  UPDATE_NOTE,
  COMPILE_NOTES,
  EDIT_CURRENT
} from '../constants/actions.constants'

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_NOTE:
      console.log(action.payload)
      return {
        ...state,
        notesData: [...state.notesData, action.payload]
      }
    case CLEAR_NOTES:
      return {}
    case COMPILE_NOTES:
      return {
        ...state,
        notesData: action.payload
      }
    case EDIT_CURRENT:
      return {
        ...state,
        currentNote: action.payload
      }
    case UPDATE_NOTE:
      console.log('UPDATE_NOTE')
      return {
        ...state,
        notesData: state.notesData.map(item => {
          if (item._id !== action.payload[0]) {
            return item
          }
          console.log('PAYLOAD:')
          console.log(action.payload[1])
          return {
            ...item,
            content: action.payload[1]
          }
        })
      }
    case DELETE_NOTE:
      console.log('DELETE_NOTE')
      return {
        ...state,
        notesData: state.notesData.filter(item => item._id !== action.payload)
      }
    default:
      return state
  }
}