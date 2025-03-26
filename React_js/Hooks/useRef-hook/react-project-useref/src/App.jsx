
import { useRef, useState } from 'react'
import './App.css'

function App() {
  
  const [time,setTime] = useState(0);

  let timerRef = useRef(null);

  function startTimer() {
    timerRef.current = setInterval(()=> {
      setTime(time => time+1);

    },1000)

  }
  function resetTimer() {

    stopTimer();
    setTime(0);
   

  }
  function stopTimer(){
    clearInterval(timerRef.current);
    timerRef.current = null

  }


  return (
    <div>

      <h1>StopWatch : {time} seconds</h1>
      <button onClick={startTimer}>Start</button>
      <br />
      <button onClick={stopTimer}>Stop</button>
      <br /><br />

      <button onClick={resetTimer}>reset</button>

    </div>
  )
}

export default App
