import Greetings from './Greetings'

function App() {
  const username = 'chai aur code'

  // {} ---> expression ----> evalvated expression
  return (
    <>
   <h1>Chai aur React with Vite | ZAA {username} </h1> 
    <Greetings />
    </>
  )
}

export default App
