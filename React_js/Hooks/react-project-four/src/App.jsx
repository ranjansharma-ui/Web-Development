
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }


  return (
    <div>
      
      <Button handleClick={handleClick} text="click me">
        <h1>{count}</h1>
        
      </Button>





     {/* <Card name="Ranjan kumar">
      <h1>Trying to be consistent in this</h1>
      <div> will complete the course soon</div>
      <div>Best WEB DEV course
      </div>
     

     </Card>

     <Card children="Main ek children hu">
      Hello ji, kaise ho saare
     </Card> */}
    </div>
    
  )
}

export default App
