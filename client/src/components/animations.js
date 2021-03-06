import React from 'react'
import { CSSTransition } from 'react-transition-group'

export const AnimateEnter = (props) => {
  return (
    <CSSTransition
      in={true}
      timeout={200}
      classNames="my-node"
      appear={true}
      mountOnEnter
    >
      {props.children}
    </CSSTransition>
  )
}

export const AnimateExpand = (props) => {
  return (
    <CSSTransition
      in={true}
      timeout={200}
      classNames="expand"
      appear={true}
      mountOnEnter
    >
      {props.children}
    </CSSTransition>
  )
}
