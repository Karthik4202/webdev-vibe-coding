import React from 'react'
import { useState,useEffect } from 'react'

const App = () => {
  const [counter1, setcounter1] = useState(0)
  const [counter2, setcounter2] = useState(0)

  //Variation-1
  useEffect(() => {
   alert("Variation-1 : I will run on each render")
  })

  //Variation-2
  useEffect(()=>{
    alert("Variation-2 : I will run on first render")
  },[])
  
  //Variation-3
  useEffect(()=>{
    alert("Variation-3 : I will run when counter1 changes")
  },[counter1])

  //Variation-4
  useEffect(()=>{
    alert("Variation-4 : I will run when counter1 is updated and also when counter2 is updated")
  },[counter1,counter2])

  //Variation-5
  useEffect(() => {
    alert("Counter1 is updated")
  
    return () => {
      alert("Variation-5 : counter1 is unmounted")
    }
  }, [counter1])
  
  return (
    <div>
      Counter1 : {counter1}<br />
      <button onClick={()=>{setcounter1(counter1+1)}}>increment counter1</button><br/>
      Counter1 : {counter2}<br />
      <button onClick={()=>{setcounter2(counter2+1)}}>increment counter2</button>
    </div>
  )
}

export default App
