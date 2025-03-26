
import { useState } from 'react';
import './App.css'
import { useRef } from 'react';

function App() {

  const [startTime, setStartTime] = useState(null);
  const[now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {

    setStartTime(Date.now());
    // console.log(setStartTime(Date.now()));
    setNow(Date.now());


    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    },10);
    

  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  let secondPassed = 0;
    if(startTime != null && now != null) {
      secondPassed = (now - startTime) /1000;
    }






  

  return (
    <div>
      <h1>Time passed: {secondPassed.toFixed(3)}</h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
    </div>
  )
}

export default App
