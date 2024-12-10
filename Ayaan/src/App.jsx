import { useState } from 'react';
import './App.css'


function App() {
let [counter, Setcounter] = useState(0)
 
  
const Addvalue = () => {
  if(counter < 10){
    Setcounter(counter + 1)
      
  }
  else {
    alert("cout is out of range") 
  }
 
}
const Removevalue = () => {
  if (counter > 0) {
    
  Setcounter(counter-1)
  }
  else {
    alert("counter is out of range")
  }

 
 
}
const Clearvalue = () => {
  counter= 0
  Setcounter(counter)
}


  return (
   <>
     <h1>REACT + VITE </h1>
     <h2> COUNTER VAULE :{counter}</h2>
     <button onClick={Addvalue}> ADD VALUE :{counter}</button>
     <br/>
     <button onClick={Removevalue}>REMOVE VALUE :{counter} </button>
     <br/>
     <button onClick={Clearvalue}>CLEAR VALUE :{counter} </button>

     
   </>
  )
    
}

export default App;
