import React from 'react'
import { TodoForm ,TodoItem } from './components/index'
import { useSelector } from 'react-redux'

function TodoList() {
  let todos = useSelector( state => state['todos']['todos'])
  console.log(todos);  
  return (
    <div className='w-full h-screen font-mono flex flex-col items-center p-9' >
      <TodoForm />
      <div className='flex flex-col w-full items-center gap-3'>
        {
          todos.map((item)=>
            <TodoItem key={item.id}  todo={item} />
          )
        }     
      </div>
      </div>

  )
}

export default TodoList