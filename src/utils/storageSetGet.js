const storage = {
  get () {
    const userKey = localStorage.getItem('userToken')
    const userId = localStorage.getItem('userId')
    if (userKey && userId) {
      return [ userKey, userId ]
    }
    return false
  },
  set (token, id) {
    if (token && id) {
      localStorage.setItem('userToken', token)
      localStorage.setItem('userId', id)
      return true
    }
    return false
  },
  clear () {
    localStorage.clear()
  }
}

export default storage