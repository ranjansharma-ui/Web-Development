import React, { useEffect, useState } from 'react'

const MultiEffectComponent = () => {
    const [count, setCount] = useState(0);
    const [second, setSeconds] = useState(0);

    useEffect(() => {
      console.log('Count changed:',count);
    }, [count]);
    //side-effect logic will run only when count is changed


    useEffect(() => {
      const intervalid = setInterval(() => {
        console.log("SetInterval Started");
        
        setSeconds(prevSecond => prevSecond + 1);
      },1000);
    
      return () => {
        console.log("Time to out");
        clearInterval(intervalid);
      }
    }, []);
    //it will run only on first render
    
    
  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>

        <h2>Seconds. {second}</h2>
      
    </div>
  )
}

export default MultiEffectComponent
