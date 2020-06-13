import React from 'react'
import ReactDOM from 'react-dom'
import TextArea from './components/text-area'
import EditingArea from './components/editing-area'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: 'Lorem ipsum dolor sit amet',
      editing: false
    }
  }

  handleClick () {
    console.log('Test')
    this.setState({ editing: !this.state.editing })
  }

  render () {
    return (
      <div className="app">
        {
          this.state.editing ?
            <EditingArea
              return={() => this.handleClick()}
            /> :
            <TextArea
              data={this.state.data}
              onClick={() => this.handleClick()}
            />
        }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))