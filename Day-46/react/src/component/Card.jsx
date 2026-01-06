import React from 'react'
import './Card.css'

const Card = ({img}) => {
  return (
    <>
      <div className='card'>
        <img src={img.download_url}/>
        <p>{img.author}</p>
      </div>
    </>
  )
}

export default Card
