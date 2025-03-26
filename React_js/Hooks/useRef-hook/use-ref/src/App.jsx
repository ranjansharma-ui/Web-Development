
import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {

  const [count, setCount] = useState(0);
  // let val = 0; // not persit value across re-render use useRef hook
  let val = useRef(0);

  let btnRef = useRef(); // creation of useRef hook





  function handleClick(){
    // val = val +1;
    val.current = val.current + 1;
    console.log("Value of val : ",val);
    
    setCount(count+1);
  }
//it runs on every render
  useEffect(() => {
    console.log("main ferse render hogaya hu");
    
  })

  function changeColor() {
    btnRef.current.style.backgroundColor = 'red'; // to help of hook useRef to add bgc color easily

  }
 

  return (
    <div>
 
      <button 
      ref={btnRef} // refrence
      onClick={handleClick}>Increment</button>
      <br />
      count : {count}
      <br />
      <br />
      <button onClick={changeColor}>Change color of 1st button</button>
    </div>
  )
}

export default App
