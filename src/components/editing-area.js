import React from 'react'
import './editing-area.scss'

const Button = (props) => {
  return (
    <button
      className="button"
      onClick={() => props.onClick()}
    >
      {props.value}
    </button>
  )
}

export default class EditingArea extends React.Component {
  render () {
    return (
      <div>
        Editing
        <Button
          value="Save"
          onClick={() => this.save()}
        />
        <Button
          value="Go Back"
          onClick={() => this.props.return()}
        />
      </div>
    )
  }
}