import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    let {user} = useContext(UserContext)
  return (
    <div className = {`w-full h-screen flex items-center justify-center`}>
        <p className='text-3xl shadow-lg shadow-black font-mono font-semibold p-4 rounded'>Hi {user} welcome...</p>
    </div>
  )
}

export default Profile