
import './App.css'

function App() {

  function handleClick() {
    alert("I am Clicked")
  }

  function handleMouseOver() {
    alert('para ke upar mouse le kr aaye ho')
  }
  
  function handleInputChange(e) {
    // console.log("Input me Value change hui h");

    console.log("Value till now :", e.target.value);
    

    
  }

  function handleSubmit(e) {
    e.preventDefault();
    // i am writing my custom behaviour down
    alert("From Submit krdu kay");


  }

  return (
    <div>
      {/* interview question */}
      {/* immediate  invocation*/}
      {/* <button onClick={(alert("Button click hua h"))}>
        Click me
      </button> */}
      <button onClick={() => alert("ye sahi h")}>
        Click me
      </button>



      {/* <form onSubmit={handleSubmit}> */}
        {/* <input type="text" onChange={handleInputChange} /> */}

        {/* <input type="text" onChange={handleInputChange} />

        <button type='submit'>Submit</button>
      </form> */}





      {/* <p onMouseOver={handleMouseOver} style={{border:"1px solid black"}}>
         I am a para
      </p>
     <button onClick={handleClick}>
      click me
     </button> */}
    </div>
     
  )
}

export default App
