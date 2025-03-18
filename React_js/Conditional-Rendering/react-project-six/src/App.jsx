import { useState } from 'react'


import './App.css'
import LogoutBtn from './compoment/LogoutBtn'
import LoginBtn from './compoment/LoginBtn'

function App() {
  //state variable
  const [isLoggedIn, setLoggedIn] = useState(true)
  // early return
  if(!isLoggedIn){
    return (
      <LoginBtn/>
    )
  }

  // //logical operator
  // return (
  //   <div>
  //     <h1> Welcome Everyone to Codehelp Web dev course</h1>
  //     <div>
  //       {isLoggedIn && <LogoutBtn/>}
  //     </div>
  //   </div>
  // )


  // return (
  //   // through ternary operator
  //   <div>
  //     {isLoggedIn ? <LogoutBtn/> : <LoginBtn/>}
  //   </div>
  // )
 //through if else
  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn/>
  //   )
  // }
  // else{
  //   return (
  //     <LoginBtn/>
  //   )
  // }
}

export default App
