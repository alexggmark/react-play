import React from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import storageSetGet from '../utils/storageSetGet'

class Notes extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      title: '',
      content: '',
      currentPosts: [],
      userAuth: new storageSetGet().get() || props.userAuth
    }
  }

  async componentDidMount () {
    try {
      let response;
      if (this.state.userAuth) {
        console.log(this.state.userAuth)
        response = await axios.get(`https://localhost:3000/notesGetUser/${this.state.userAuth}`, {
          headers: {
            'authorization': this.state.userAuth,
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

  async sendPost () {
    if (!this.state.userAuth) {
      console.log('Not logged in')
    }
    if (!this.state.title || !this.state.content) { return }
    try {
      await axios.post('https://localhost:3000/notesPost', {
        userString: this.state.userAuth,
        title: this.state.title,
        content: this.state.content
      })
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
        <div>
          <h2>Output Area</h2>
          <ul>
            {this.state.currentPosts.map((item, index) => {
              return (
                <li key={index}>
                  {item.title} - {item.userString} - {item.content}
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