import Usercard from "./components/Usercard"

import "./App.css";



import ranjanpic from "./assets/Ranjan.jpg"
import Maharana from "./assets/download.jpeg"
import Prethivi from "./assets/arsalan-khan-prithvi-raj-chauhan.jpg"




function App() {
  

  return (
    <>
    <div className="container1">
      <Usercard name="Ranjan sharma" desc="Decs_1" image={ranjanpic} style={{"border-radius":"10px"}}/>
      <Usercard name="Maharana"  desc="Decs_2" image={Maharana} style={{"border-radius":"10px"}}/>
      <Usercard name="Prithivi"  desc="Decs_3" image={Prethivi} style={{"border-radius":"10px"}}/>
    </div>
    </>
  )
}

export default App
