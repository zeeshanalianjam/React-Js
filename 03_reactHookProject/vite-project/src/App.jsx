import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let counter = 10;
  let [counter , setConter] = useState(0);

  const addValue = ()=>{
    // counter = counter + 1;
  setConter(counter + 1);
  console.log('You are cliked ', counter);  
  if(counter === 20){
    setConter(0);
    console.log('Counter is 20');
  } 
}

  const remoValue = ()=>{
    setConter(counter - 1);
    if (counter === 0) {
      setConter(20)
    }
  }

  return (
    <>
    <h1>React Counter Project with hamad</h1>
    <h2>Counter is : {counter}</h2>
    <button onClick={addValue}>Add Counter</button>
    <button onClick={remoValue}>Add Counter</button>
    </>
  )
}

export default App
