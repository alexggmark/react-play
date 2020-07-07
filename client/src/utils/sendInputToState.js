const sendInputToState = (event, input, that) => {
  switch (input) {
    case 'name':
      that.setState({ userName: event.target.value })
      break
    case 'pass':
      that.setState({ userPassword: event.target.value })
      break
    default: // Do nothing
  }
}

export default sendInputToState