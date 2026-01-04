import React,{useState, useEffect} from 'react'
import Card from './components/Card'
import './App.css'

const App = () => {

  const [data, setdata] = useState([])
  const [fetched, setfetched] = useState(false)

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then(response => response.json())
   .then(response => {
    setdata(response),
    setfetched(true)
   })
   .catch(err => console.log(err))
  }, [])
  
  return (
    <div className='users'>
      {fetched? 
      data.map((user)=>(<Card key={user.id} user={user}/>))
      : <h1>Data not fetched</h1>}
    </div>
  )
}

export default App
