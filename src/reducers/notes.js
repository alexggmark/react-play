import {
  CLEAR_NOTES,
  COMPILE_NOTES,
  EDIT_CURRENT
} from '../constants/actions'

export default (state = {}, action) => {
  switch (action.type) {
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
    default:
      return state
  }
}