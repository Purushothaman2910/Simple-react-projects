import React, { useCallback, useState, useEffect ,useRef } from 'react'

const PasswordGenerator = () => {
  let [length , setlength] = useState(8)
  let [numbersAllowed , setNumbersAllowed] = useState(false)
  let [charAllowed , setCharAllowed] = useState(false)
  let [password , setPassword] = useState('')
  let passwordRef = useRef()
  let generatePassword = useCallback(()=>{
    let pass = "" ;
    let str = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm'
    if(numbersAllowed) str += '1234567890'
    if(charAllowed) str += '!@#$%^&*()_+-={}?'
    for(let i = 1 ; i <=length ;i++){
      const char = Math.floor(Math.random() * (str.length + 1))
      pass += str.charAt(char)
    }
    setPassword(pass)
  } ,[ length , numbersAllowed , charAllowed ])

  function copyPasswordToClipBoard(){
    navigator.clipboard.writeText(password)  
    passwordRef.current.select()  
  }

  useEffect(()=>{
    generatePassword()
  } ,[length , numbersAllowed ,charAllowed])

  return (
    <>

      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
        <h1 className='text-3xl text-center font-bold my-3'>The password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text" 
            name="password" 
            value={password}
            id="password" 
            className='outline-none w-full py-1 px-3'
            ref={passwordRef}
            readOnly
            />
            <button 
            className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
            onClick={copyPasswordToClipBoard}
            >
              copy
            </button>           
        </div>
        <div
            className='flex text-sm gap-x-2'
            >
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="range" 
                  name="length" 
                  id="length" 
                  min={6}
                  max={100}
                  value={length}
                  className='cursor-pointer'
                  onChange={(e) => setlength(e.target.value)}
                  />
                  <label htmlFor="length">Length : {length}</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox" 
                  name="numberAllowed" 
                  id="numberAllowed" 
                  defaultChecked = {numbersAllowed}
                  onChange={()=>{
                    setNumbersAllowed((preValue)=> !preValue)
                  }}
                  />
                  <label htmlFor="numberAllowed">Numbers</label>
              </div>
              <div className='flex items-center gap-x-1'>
                  <input 
                  type="checkbox" 
                  name="charAllowed" 
                  id="charAllowed" 
                  defaultChecked = {charAllowed}
                  onChange={()=>{
                    setCharAllowed((preValue)=> !preValue)
                  }}
                  />
                  <label htmlFor="charAllowed">Characters</label>
              </div>
            </div>
      </div>
    </>


  )
}

export default PasswordGenerator