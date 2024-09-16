import React from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
    let data = useLoaderData()
  return (
    <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'> 
        <p className='text-4xl text-black/60 font-bold'>{data.login}</p>
    </div>
  )
}

export default GitHub

export const gitHubDataLoader = async () =>{
    let respone = await fetch('https://api.github.com/users/Purushothaman2910')
    return respone.json()
}