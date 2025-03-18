import { useState } from 'react'

import './App.css'
import ColorSwitch from './component/ColorSwitch'

function App() {
  const [clicks, setClicks] = useState(0)

  function handleClickOutside() {
    setClicks( c => c+1)
  }

  function getRandomLightColor(){
    let r = 150 + Math.round(100*Math.random());
    let g = 150 + Math.round(100* Math.random())
    let b = 150 + Math.round(100* Math.random())
    return `rgb(${r},${g},${b})`;
  }
  function handleChangeColor() {
    let bodyStyle = document.body.style;
    bodyStyle.backgroundColor = getRandomLightColor();
  }

  return (
    <div style={{width: '50%', height: '50%', border: "2px,solid,black"} } onClick={handleClickOutside} className='divBox'>
      <ColorSwitch onChangeColor={handleChangeColor} />
      <br />
      <br />
      <h2>Click on the page: {clicks}</h2>
    </div>
  )
}

export default App
