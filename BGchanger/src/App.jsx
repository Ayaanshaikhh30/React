import { useState } from "react"


function App() {
  const [color,setcolor] = useState("black")

  return (
    <>
    <div className="w-full h-screen duration-200" style={{background:color}}>
    <div className="fixed flex flex-wrap justify-center top-15 inset-x-0 px-2 shadow-md rounded-lg">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3  py-2 rounded-2xl">
    <button onClick={() => setcolor("Red")}    className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Red"}}>    Red</button>
    <button onClick={() => setcolor("Green")}  className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Green"}}>  Green</button>
    <button onClick={() => setcolor("Blue")}   className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Blue"}}>   Blue</button>
    <button onClick={() => setcolor("orange")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Orange"}}> Orange</button>
    <button onClick={() => setcolor("pink")}   className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Pink"}}>   Pink</button>
    <button onClick={() => setcolor("Purple")} className="outline-none  px-4 py-1 rounded-full text-white shadow-lg" style={{background:"Purple"}}> Purple</button>
    </div>
    
    </div>
    
    </div>
    
      
    </>
  )
}

export default App