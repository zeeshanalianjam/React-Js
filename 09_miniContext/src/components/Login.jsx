import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handelSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password })
    }

    return (
        <div className='space-y-3'>
            <h2 className='text-3xl my-4 border-b-2'>Login</h2>
            <form className='space-x-2'>
                <input className='bg-black text-white p-3 rounded-md' type="text" placeholder="username" value={username} onChange={(e) => { setUsername(e.target.value) }} />
                <input className='bg-black text-white p-3 rounded-md' type="password" placeholder="password" value={password} onChange={(e) => { setPassword(e.target.value) }} />
                <button className='bg-black text-white p-3 rounded-md' type='submit' onClick={handelSubmit}>Login</button>
            </form>

        </div>
    )
}

export default Login