
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'
import LoggerComponent from './component/LoggerComponent'
import TimerComponent from './component/TimerComponent'
import DataFetcher from './component/DataFetcher'
import ResizeComponent from './component/ResizeComponent'
import MultiEffectComponent from './component/MultiEffectComponent'

function App() {
  // const [count,setCount] = useState(0);
  // const [total,setTotal] = useState(1);

  //first -> side-effect function
  //second -> clean-up function
  //third -> comma sepatated dep list

  //variation:1
  // runs on every render
  // useEffect(() => {
  //   alert("I will run on each render")

  // })

  //variation: 2
  //that runs on only first render
  // useEffect(() => {
  //   alert("I will run on only 1st render")

  // },[])

  //variation: 3
  //dependencylist
  // useEffect(() => {
  //   alert("I will run everyTime when count is updt")

  // },[count])

  //variation: 4
  //multiple dependencies
  // useEffect(() => {
  //   alert("I will run every time when count/total is update")
   
  // }, [count,total])

  //variation: 5
  // is barr let's add a cleaup function
  // useEffect(() => {
  //   alert("Count is updated")
  
  //   return () => {
  //     alert("count is unmounted form UI");
  //   }
  // }, [count])
  
  
   
  
  

  // function handleClick() {
  //   setCount(count+1);
  // }

  // function handleClickTotal() {
  //   setTotal(total+1)
  // }



  return (
    <div>

      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      {/* <DataFetcher/> */}
      {/* <ResizeComponent/> */}
      <MultiEffectComponent/>




      {/* <button onClick={handleClick}>
        update Count
      </button>
      <br />
      Count is : {count}
      <br />
      <button onClick={handleClickTotal}>
        update Total
      </button>
      <br />
      Count is : {total} */}
    </div>
  )
}

export default App
