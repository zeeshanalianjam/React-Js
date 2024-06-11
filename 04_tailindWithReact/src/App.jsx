import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TeamCard from './components/teamCard'

function App() {
  
  // const myObj = {
  //   username : 'Gull',
  //   age : 32
  // }
  const myName = ["Mr Joy" , "Imran", "Nimra"];

  return (
    <>
    <h1 className='bg-purple-600 text-white p-4 rounded-xl'>Tailwind with React</h1>
    <TeamCard username={myName[0]} secondName={myName[1]} thirdName={myName[2]}/>
    <TeamCard username={myName[0]="Zeeshan Ali"} secondName={myName[1]="Hammad"} thirdName={myName[2]="Laiba"} team="iCoder-11-Team"/>
    </>
  )
}

export default App
