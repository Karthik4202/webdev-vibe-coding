import React from 'react'
import { useState } from 'react'

const login = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const handleSubmit =(e)=>{
    e.preventDefault();
    const result = {email, password};
    console.log(result)
  }

  return (
    <div className='bg-white flex flex-col justify-center items-center w-fit my-28 px-5 py-5 rounded-2xl shadow-sm shadow-slate-400'>
      <h1 className='mb-10 font-semibold text-3xl text-purple-800'>Login</h1>
        <form onSubmit={handleSubmit} className='flex flex-col space-y-5'>
            <input onChange={(e)=>setemail(e.target.value)} className='border border-slate-300 px-5 py-2 text-xl rounded-lg outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400' value={email} type='email' placeholder='Enter your email' required/>
            <input onChange={(e)=>setpassword(e.target.value)} className='border border-slate-300 px-5 py-2 text-xl rounded-lg outline-none focus:ring-1 focus:ring-blue-400 focus:border-blue-400' value={password} type='password' placeholder='Enter password' required/>
            <button className='rounded bg-purple-600 font-semibold py-2 text-white text-xl hover:cursor-pointer hover:bg-purple-800 transition'>Login</button>
      </form>
    </div>
  )
}

export default login
