import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(5)

const addValue = ()=>{
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  setCount((prevCounter) => prevCounter + 1)
  if(count === 20){
    setCount(0)
    console.log('Counter is 20');
  }
}

  return (
    <>
    <h1>Conter inCreementx4 Project</h1>
    <h2>Counter is : {count}</h2>
    <button onClick={addValue}>Add Value</button>
    </>
  )
}

export default App
