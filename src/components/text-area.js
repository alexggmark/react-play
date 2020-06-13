import React from 'react'

export default class TextArea extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      data: props.data || null
    }
  }

  render () {
    return (
      <div
        className="text-area"
        onClick={() => this.props.onClick()}
      >
        {this.state.data}
      </div>
    )
  }
}