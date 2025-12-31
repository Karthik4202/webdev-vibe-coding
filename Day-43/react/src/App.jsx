import React from 'react'
import Card from './components/Card'
import './app.css'

const App = () => {
  const data = [
    {
        id:1,
        logo:"/amazon.jpg",
        company:"Amazon",
        posted:"5 days ago",
        role:"Senior UI/UX Designer",
        jobtype:"Part-Time",
        jobdesc:"Senior Level",
        salary:"$120/hr",
        joblocation:"Mumbai, India"
    },
    {
        id:2,
        logo:"/google.jpg",
        company:"Google",
        posted:"30 days ago",
        role:"Graphic Designer",
        jobtype:"Part-Time",
        jobdesc:"Flexible Schedule",
        salary:"$150-220k",
        joblocation:"Kochi, India"
    },
    {
        id:3,
        logo:"/dribble.jpg",
        company:"Dribble",
        posted:"5 days ago",
        role:"Senior Motion Designer",
        jobtype:"contract",
        jobdesc:"Remote",
        salary:"$85/hr",
        joblocation:"Chennai, India"
    },
    {
        id:4,
        logo:"/figma.jpg",
        company:"Figma",
        posted:"5 days ago",
        role:"UX Designer",
        jobtype:"Full-Time",
        jobdesc:"In office",
        salary:"$200-250k",
        joblocation:"Bangalore, India"
    },
    {
        id:5,
        logo:"/airbnb.jpg",
        company:"Airbnb",
        posted:"5 days ago",
        role:"Junior UI/UX Designer",
        jobtype:"Contract",
        jobdesc:"Remote",
        salary:"$100/hr",
        joblocation:"Delhi, India"
    },
    {
        id:6,
        logo:"/apple.jpg",
        company:"Apple",
        posted:"5 days ago",
        role:"Graphic Designer",
        jobtype:"Full-Time",
        jobdesc:"Flexible Schedule",
        salary:"$85-120k",
        joblocation:"Kerala, India"
    }
]
  return (
    <div className='main'>
    <div className='jobposts'>
      {data.map((job)=>(
        <Card key={job.id} job={job}/>
      ))}
    </div>
    </div>
  )
}

export default App
