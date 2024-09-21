import React, { useState } from 'react'
import { useTodo } from '../contexts'

function TodoItem({todo}) {
    let [editable , setEditable] = useState(false)
    let [message ,setMessage] = useState(todo.todo)
    let { updateTodo , deletTodo , toggleComplete } = useTodo()

    function editToddo(){
        updateTodo(todo.id , {...todo , todo : message })
    }

  return (
    <div 
    className={`m-4 flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300 text-black ${(todo.completed)?'bg-[#c6e9a7]':'bg-[#ccbed7]'}`}
    >
      <input type="checkbox" className='cursor-pointer' checked = {todo.completed} onChange={() =>toggleComplete(todo.id)}/>
      <input 
      type="text" 
      className={`border outline-none bg-transparent rounded-lg w-full ${(editable)?'border-black/35':'border-transparent'}`} 
      value={message}
      readOnly = {!editable}
      onChange={(e)=> setMessage(e.target.value)}
      />
      <button className={`inline-flex w-10 h-8 rounded-lg text-sm *:border border-black/20 justify-center items-center
        bg-gray-50 hover:bg-gray-100 shrink-0`}
        onClick={()=>{
          if(todo.completed) return
          if(editable) { editToddo() } else {setEditable((prevalue) => !prevalue)}
        }}
        disabled = {editable}
        >{(editable) ?'save':'edit'}</button>

        <button
        onClick={() => deletTodo(todo.id)}
        className='inline-flex w-14 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0'
        >
          delete
        </button>
    </div>
  )
}

export default TodoItem