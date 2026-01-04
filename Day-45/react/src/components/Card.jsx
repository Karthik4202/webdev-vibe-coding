import React from 'react'

const Card = ({user}) => {
  return (
    <div className='card'>
        <div className='card-left'>
            <div className='user-name'>
                <h2>{user.name}</h2>
                <p>@{user.username}</p>
            </div>
            <div className='user-company'>
                <h2>{user.company.name}</h2>
                <p>{user.company.catchPhrase}</p>
                <p>{user.company.bs}</p>
            </div>
        </div>
        <div className='card-right'>
            <div className='user-info'>
                <div className='details'>
                    <img src='email.png'></img>
                    <p className='text'>{user.email}</p>
                </div>
                <div className='details'>
                    <img src='phone-call.png'></img>
                    <p>{(user.phone).split(" ")[0]}</p>
                </div>
                <div className='details'>
                    <img src='web.png'></img>
                    <p>{user.website}</p>
                </div>
            </div>
            <div className='user-address'>
                <h3>Address</h3>
                <p>{user.address.suite}, {user.address.street}</p>
                <p>{user.address.city}, {user.address.zipcode}</p>
            </div>
        </div>
    </div>
  )
}

export default Card
