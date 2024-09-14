import React, { useState } from 'react'

const App = () => {
  const [color,setColor] = useState('red')
  function changeColor(newColor){
    setColor(newColor)
  }
  return (
    <div className={`w-full h-screen duration-200 bg-${color}-600`}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 gap-3 bg-white mx-8 py-2 rounded-md'>
        <button 
        className='rounded-md px-6 py-4 shadow-lg bg-red-600 text-black text-xl' 
        onClick={()=> changeColor('red')}>Red</button>
        <button 
        className='rounded-md px-6 py-4 shadow-lg bg-yellow-600 text-black text-xl' 
        onClick={()=> changeColor('yellow')}>Yellow</button>
        <button 
        className='rounded-md px-6 py-4 shadow-lg bg-green-600 text-black text-xl' 
        onClick={()=> changeColor('green')}>Green</button>
      </div>
    </div>
  )
}

export default App