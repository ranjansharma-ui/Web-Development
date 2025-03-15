import React from 'react'
import Ranjan from '../assets/Ranjan.jpg'

import "./UserCard.css"
const Usercard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-title'>{props.name}</p>
        <img id = 'user-img' src={Ranjan} alt="love"  />
        <p id='user-desc'>Discription of {props.name}</p>
      
    </div>
  )
}

export default Usercard


