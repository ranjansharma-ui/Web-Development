import React from 'react'
import Ranjan from '../assets/Ranjan.jpg'

import "./UserCard.css"
const Usercard = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-title'>{props.name}</p>
        <img id = 'user-img' src={props.image} alt={props.name}  />
        <p id='user-desc'>{props.desc}</p>
      
    </div>
  )
}

export default Usercard


