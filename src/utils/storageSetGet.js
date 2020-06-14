export default class storageSetGet {
  constructor () {
    this.key = 'userToken'
  }

  get () {
    const userKey = localStorage.getItem(this.key)
    if (userKey) {
      return userKey
    }
    return false
  }

  set (credentials) {
    if (credentials) {
      localStorage.setItem(this.key, credentials)
      return true
    }
    return false
  }
}