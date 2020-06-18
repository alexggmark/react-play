// export const storageSetGet = storageSetGet
// export const sendInputToState

// const sendInputToState = (event, input, that) => {
//   switch (input) {
//     case 'name':
//       that.setState({ userName: event.target.value })
//       break
//     case 'pass':
//       that.setState({ userPassword: event.target.value })
//       break
//     default:
//       console.log('Nothing')
//   }
// }

// class storageSetGet {
//   constructor () {
//     this.key = 'userToken'
//     this.keyId = 'userId'
//   }

//   get () {
//     const userKey = localStorage.getItem(this.key)
//     const userId = localStorage.getItem(this.keyId)
//     if (userKey && userId) {
//       return [ userKey, userId ]
//     }
//     return false
//   }

//   set (token, id) {
//     if (token && id) {
//       localStorage.setItem(this.key, token)
//       localStorage.setItem(this.keyId, id)
//       return true
//     }
//     return false
//   }

//   clear () {
//     localStorage.clear()
//   }
// }