
import { useState } from 'react'
import './App.css'
import Cards from './components/Cards'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child me state ko sync karwadunga

  const [name, setName] = useState('');
 
  return (
    <div>
      <Cards title="Card1" name={name} setName={setName}/>
      <Cards title="Card2" name={name} setName={setName}/>
      
      {/* <p>I am inside parentcomponents and value of name is {name}</p> */}
    </div>
  )
}

export default App
