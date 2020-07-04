const storage = {
  get () {
    const userKey = localStorage.getItem('userToken')
    const userId = localStorage.getItem('userId')
    const userName = localStorage.getItem('userName')
    if (userKey && userId) {
      return [ userKey, userId, userName ]
    }
    return false
  },
  set (token, id, username) {
    if (token && id) {
      localStorage.setItem('userToken', token)
      localStorage.setItem('userId', id)
      localStorage.setItem('userName', username)
      return true
    }
    return false
  },
  clear () {
    localStorage.clear()
  }
}

export default storage