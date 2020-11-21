import React from 'react'

const Button = props => (
  <button onClick={props.action}>{props.text}</button>
)

export default Button;
