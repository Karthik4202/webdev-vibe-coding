import React from 'react'

const navbar = () => {
  return (
    <div className='flex justify-between px-5 py-2 text-slate-200 text-xl font-semibold bg-purple-700'>
      <span className='hover:text-white hover:cursor-pointer'>Frontlines Edutech</span>
      <ul className='flex gap-4'>
        <li className='hover:text-white hover:cursor-pointer'>Register</li>
        <li className='hover:text-white hover:cursor-pointer'>Login</li>
      </ul>
    </div>
  )
}

export default navbar
