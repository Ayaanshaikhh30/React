import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card'

function App() {
  const [count, setCount] = useState(0)
  let obj = {
    username: "Ayaan",
    age : "23",
    College:"Rai University"

  }
  let arr = [1,2,3,4,5]

  return (
    <>
     <h1 className='bg-green-500 text-black p-5 rounded-xl cursor-pointer text-pretty mb-4'> Tailwind Test</h1>
     <Card  username = "Chai"/>
     <Card  username ="Hello"/>
     
     
  
 

    </>
  )
}

export default App
