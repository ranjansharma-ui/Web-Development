import React from 'react'

const Button = (props) => {
  return (
    <div>
        {props.children}
        {props.count}
        <button onClick={props.handleClick}>
        {props.text}

    </button>

    </div>
    
  )
}

export default Button
