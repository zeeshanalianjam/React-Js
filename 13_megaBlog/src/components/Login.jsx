import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Login as authLogin } from '../store/authSlice'
import { Button, Input, Logo } from './index'
import { useDispatch } from 'react-redux'
import authServices from '../appwrite/auth'
import { useForm } from 'react-hook-form'


function Login() {
  const naviage = useNavigate()
  const dispatch = useDispatch()
  const { register, handleSubmit } = useForm()
  const [error, setError] = useState('')

  const login = async (data) => {
    setError('')
    try {
      const session = await authServices.login(data)
      if (session) {
        const userData = authServices.getCurrentUser()
        if (userData) dispatch(authLogin(userData));
        naviage('/')
      }
    } catch (error) {
      setError(error.message)
    }
  }

  return (
    // main div
    <div className='flex items-center justify-center w-full'>
      {/* second div */}
      <div className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}>

        {/*  third div */}
        <div className="mb-2 flex justify-center">
          {/* third div --> span */}
          <span className="inline-block w-full max-w-[100px]">
            {/* logo */}
            <Logo width="100%" />
          </span>
        </div>
        {/* second div --> h2 heading */}
        <h2 className="text-center text-2xl font-bold leading-tight">Sign in to your account</h2>
        {/* second div --> para --> link */}
        <p className="mt-2 text-center text-base text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link
            to="/signup"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        {/* second div --> error */}
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        {/* second div --> form */}
        <form c onSubmit={handleSubmit(login)} className="mt-8">
          {/* form data */}
          <div className='space-y-5'>
            {/* Input grap from components and this input type email */}
            <Input label="Email: " placeholder="Enter your email" type="email" {...register('email', {
              required: true, validate: {
                matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              }
            })} />
            {/* Input grap from components and this input type password */}
            <Input label="Password" type="password" placeholder="Enter your password" {...register('password', {
              required: true,
            })}
            />
            <Button type="submit" className="w-full">Sign In</Button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default Login
