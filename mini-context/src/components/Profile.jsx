import React, { useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    let {user} = useContext(UserContext)
  return (
    <div>
        Hi {user} welcome...
    </div>
  )
}

export default Profile