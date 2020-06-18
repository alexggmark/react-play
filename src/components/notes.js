import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import storageSetGet from '../utils/storageSetGet'

const storage = new storageSetGet()

const Error = () => {
  return (
    <div>Error not logged in!</div>
  )
}

class Notes extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      title: '',
      content: '',
      currentPosts: [],
      userAuth: props.userAuth || storage.get(),
      error: false
    }
  }

  componentDidMount () {
    this.getData()
  }

  async getData () {
    try {
      let response;
      if (this.state.userAuth) {
        console.log('User ID:')
        console.log(this.state.userAuth[1])
        response = await axios.get(`https://localhost:3000/notesGetUser/${this.state.userAuth[1]}`, {
          headers: {
            'authorization': this.state.userAuth[0],
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
          }
        })
      } else {
        response = await axios.get('https://localhost:3000/notesGet')
      }
      this.setState({ currentPosts: response.data })
    } catch (err) {
      console.error(err)
    }
  }

  handleInputChange = (event, input) => {
    switch (input) {
      case 'title':
        this.setState({ title: event.target.value })
        break
      case 'content':
        this.setState({ content: event.target.value })
        break
      default:
        console.log('Nothing')
    }
  }

  async deleteNote(id) {
    console.log(id)
    try {
      await axios.delete(`https://localhost:3000/notesDelete/${id}`)
      this.getData()
    } catch (err) {
      console.error(err)
    }
  }

  async sendPost () {
    console.log(this.props.userAuth)
    if (!this.state.userAuth) {
      this.setState({ error: true })
      return
    }
    if (this.state.error) {
      this.setState({ error: false })
    }

    if (!this.state.title || !this.state.content) { return }
    try {
      await axios.post('https://localhost:3000/notesPost', {
        userString: this.state.userAuth[1],
        title: this.state.title,
        content: this.state.content
      })
      this.getData()
    } catch (err) {
      console.error(err)
    }
  }

  render () {
    return (
      <div className="notes">
        <div>
          <h4>User Auth in State: {this.state.userAuth}</h4>
          <h2>Input Area</h2>
          <input
            placeholder="Title"
            onChange={(event) => this.handleInputChange(event, 'title')}
            type="text"
          />
          <input
            placeholder="Content"
            onChange={(event) => this.handleInputChange(event, 'content')}
            type="text"
          />
          <button onClick={() => this.sendPost()}>
            Submit
          </button>
        </div>
        {this.state.error && <Error />}
        <div>
          <h2>Output Area</h2>
          <ul>
            {this.state.currentPosts.map((item, index) => {
              return (
                <li key={index}>
                  {item.title} - {item.userString} - {item.content}
                  <button onClick={() => this.deleteNote(item._id)}>X</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({ Login }) => ({
  userAuth: Login.userAuth
})

export default connect(mapStateToProps)(Notes)