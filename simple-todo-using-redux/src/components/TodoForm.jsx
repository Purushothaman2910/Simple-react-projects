import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../Features/Todo/slice';

function TodoForm() {
    let [value , setValue] = useState('')
    let dispatch = useDispatch()
    function handleSubmit (e){
        e.preventDefault() ;
        dispatch(addTodo(value))
        setValue('')
    }
  return (
    <form  onSubmit={handleSubmit}  className='p-8 mt-7 mb-4 mx-7 w-full flex justify-center' >
    <div className='rounded-lg text-2xl w-fit p-0 overflow-hidden border-[2px] border-black/20'>
      <input 
        type="text" className='outline-none px-2 py-1' 
        onChange={(e) => setValue(e.target.value)} 
        value={value || ''} 
      />
      <input 
        type="submit" 
        className='bg-green-900 text-white px-2 py-1' 
        value="Add todo" 
      />        
    </div>
      
  </form>
  )
}

export default TodoForm