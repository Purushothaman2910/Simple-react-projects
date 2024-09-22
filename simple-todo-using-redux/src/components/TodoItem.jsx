import React from 'react'
import { removeTodo , updateTodo } from '../Features/Todo/slice'
import { useDispatch } from 'react-redux'

function TodoItem({todo = {id : null ,text : "New todo" , completed : false}}) {
  let dispatch = useDispatch()

  return (
    <div className={`text-3xl w-[30%] gap-4 flex p-4 ${(todo.completed)? 'bg-pink-500' : 'bg-yellow-500'} items-center justify-between rounded-md`}>
        <input type="checkbox" value={todo.completed}  onClick={()=> dispatch(updateTodo({ id : todo.id }))}/>
        <p>{todo.text}</p>
        <button
        onClick={()=> dispatch(removeTodo(todo.id))}
        >
          <i className='bx bxs-trash text-white' ></i>
        </button>
    </div>
  )
}

export default TodoItem