import React from 'react'

const ColorSwitch = (props) => {
  return (
    <div>
      <button onClick={e => {
        e.stopPropagation();
        props.onChangeColor();
      }}>
        change color

      </button>
    </div>
  )
}

export default ColorSwitch
