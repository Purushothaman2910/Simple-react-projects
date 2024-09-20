import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import {useTheme} from '../context/ThemeContext'
import {THEMES} from '../Constants.js'

function Profile() {
    let {user} = useContext(UserContext)
    let { theme , toggleTheme} = useTheme()
  return (
    <>
    <div className = {`${(theme === THEMES.light) ? 'bg-white' : 'bg-black'} w-full h-screen flex flex-col gap-10 items-center justify-center`}>
        <p className={`text-3xl  shadow-lg ${(theme === THEMES.light)?'shadow-black ':'bg-black shadow-white text-white'} font-mono font-semibold p-4 rounded`}>Hi {user} welcome...</p>
        <button 
        className={` font-mono font-medium text-xl border-[4px] ${(theme === THEMES.light)?'bg-white border-black text-black':'bg-black border-white text-white'} p-2 rounded-md `}
        onClick={() => toggleTheme()}
        >Toggle Theme</button>
    </div>    
    </>
  )
}

export default Profile