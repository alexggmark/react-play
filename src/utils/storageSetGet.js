export default class storageSetGet {
  constructor () {
    this.key = 'userToken'
    this.keyId = 'userId'
  }

  get () {
    const userKey = localStorage.getItem(this.key)
    const userId = localStorage.getItem(this.keyId)
    if (userKey && userId) {
      return [ userKey, userId ]
    }
    return false
  }

  set (token, id) {
    if (token && id) {
      localStorage.setItem(this.key, token)
      localStorage.setItem(this.keyId, id)
      return true
    }
    return false
  }

  clear () {
    localStorage.clear()
  }
}