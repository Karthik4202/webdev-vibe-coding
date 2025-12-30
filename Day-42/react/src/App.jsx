import React from 'react'
import Register from './components/register'
import Navbar from './components/navbar'
import Login from './components/login'
const App = () => {
  return (
    <>
      <div className='bg-purple-100 h-screen'>
        <Navbar />
        <div className='flex justify-evenly items-center'>
          <Register />
          <Login />
        </div>
      </div>
    </>
  )
}

export default App
