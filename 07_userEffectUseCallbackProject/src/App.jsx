import { useState, useCallback, useEffect, useRef } from 'react'
// import './App.css'

function App() {
  // using some hooks
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)


  // using "useCallback()" hooks
  const passwordGenrator = useCallback(() => {
    // simple js variables
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    // using if condition for add number and char in str with hooks variables
    if (numberAllowed) str += "0123456789";

    if (charAllowed) str += "!@#$%^&*()_-=+";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      console.log(char, i);

      pass += str.charAt(char)
      console.log(pass += str.charAt(char));

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const passwordCopytoClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenrator()
  }, [length, numberAllowed, charAllowed, passwordGenrator])
  return (
    <>
      {/* main div containr */}
      <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        {/* heading */}
        <h1 className='text-white text-3xl text-center my-4' onClick={passwordGenrator}>Password Generator</h1>
        <h2 className='py-3'>I am not more wokring on Ui beacuse timing issue...</h2>
        {/* flex div for iput and copy button */}
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly ref={passwordRef} />
          <button onClick={passwordCopytoClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        </div>
        {/* inputs range and 2 checkboxes for flex container */}
        <div className='flex text-sm gap-x-2'>
          {/* input range */}
          <div className='flex items-center gap-x-1'>
            <input type="range" min={8} max={20} value={length} className='cursor-pointer' onChange={(e) => { setLength(e.target.value) }} />
            <label >Length: {length}</label>
          </div>
          {/* input for number add */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          {/* input for char add */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }}
            />
            <label htmlFor="characterInput">Characters</label>
          </div>

        </div>



      </div>
    </>
  )
}

export default App
