import React, { useState } from 'react'
import {useTodo} from '../contexts/index'

function TodoForm() {
    let [value ,setValue] = useState('')
    let { addTodo } = useTodo() 
    function add(e){
        e.preventDefault() ;
        if(!value) return
        addTodo({todo : value , completed : false})
        setValue('')
    }
  return (
    <form onSubmit={add} className='flex items-center mb-3 mt-[30vh] overflow-hidden border-[2px] border-black rounded-lg'>
        <input type="text" className='outline-none px-2 py-1' value={value || ''} onChange={(e) => setValue(e.target.value)}/>
        <input type="submit" className=' bg-blue-800 px-2 py-1' value="Add" />
    </form>
  )
}

export default TodoForm