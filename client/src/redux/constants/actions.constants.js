let apiUrl = 'https://localhost:3000'
if (process.env.NODE_ENV === 'production') {
  apiUrl = ''
}

export const API_URL = apiUrl
export const LOGIN_USER = 'loginUser'
export const LOGOUT_USER = 'logoutUser'
export const USER_REGISTER = 'userRegister'
export const USER_REGISTER_SUCCESS = 'userRegisterSuccess'
export const CLEAR_NOTES = 'clearNotes'
export const COMPILE_NOTES = 'compileNotes'
export const EDIT_CURRENT = 'editCurrent'
export const ADD_NOTE = 'addNote'
export const UPDATE_NOTE = 'updateNote'
export const DELETE_NOTE = 'deleteNote'