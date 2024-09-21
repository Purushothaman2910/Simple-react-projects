import React, { useCallback, useEffect, useState } from 'react'
import { TodoProvider } from './contexts'
import { TodoForm ,TodoItem } from './components'

function App() {
  let [todos ,setTodos] = useState([])

  function addTodo(todo){
    setTodos((preValue) => {return [ {id:Date.now() , ...todo} , ...preValue]})
  }

  function updateTodo(id , todo){
    setTodos((preValue)=>{
      preValue.map(()=>(
        id === preValue.id ? {id , ...todo} : preValue
      ))
    })
  }

  function deletTodo(id){
    setTodos((preValue)=> preValue.filter((item)=> item.id !== id ))
  }

  function toggleComplete(id){
    setTodos((preValue)=>(
      preValue.map((item) => (item.id === id) ? {completed : true , ...preValue} : preValue )
    ))
  }


  useEffect(() => {
      let todos = JSON.parse(localStorage.getItem('todos'))
      if( todos && todos.length > 0 ){
        setTodos(todos)
      }      
  } , [] )

  useEffect(()=>{
    localStorage.setItem('todos' , JSON.stringify(todos))
  } ,[todos])



  return (
    <TodoProvider value={{todos , addTodo ,updateTodo ,deletTodo ,toggleComplete }}>
      <div className='font-mono text-2xl flex flex-col items-center w-full h-screen'>
        <TodoForm />
        {
          todos.map((item)=> <TodoItem todo={item} />)
        }
      </div>
    </TodoProvider>
  )
}

export default App