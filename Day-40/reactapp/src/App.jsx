function App() {

  const profiles = [
    {id:1,name:"Mahesh Babu"},
    {id:2,name:"Prabhas"},
    {id:3,name:"Allu Arjun"}
  ]

  const handleClick =()=>{
    alert("Button 1 Was Clicked!!!")
  }

  const handleClickMsg =(msg)=>{
    alert(msg)
  }
  return (
    <>
      <ul>
      <h2>Rendering Array of Json Objects using Map</h2>
        {profiles.map(profile=>{
          return <li key={profile.id}>{profile.name}</li>
        })}
      </ul>

      <button onClick={handleClick}>Button 1</button>
      <button onClick={()=>{handleClickMsg("First React Application!!!")}}>Button 2</button>
    </>
  )
}

export default App
