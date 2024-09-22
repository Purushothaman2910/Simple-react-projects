import React, { useEffect, useState } from 'react'
import {TodoProvider} from './context/index'
import {TodoForm, TodoItem} from './components/index'

function TodoList() {
  let [todos , setTodoList] = useState([])  

  function addTodo(todo){
    setTodoList((preValue) => {
      return [
        {
          id : Date.now() ,
          ...todo
        } ,
        ...preValue
      ]
    })
  }

  function deleteTodo(id){
    setTodoList((preValue) => preValue.filter(item => item.id === id))
  }

  function updateTodo(id , todo){    
    setTodoList((preValue) => preValue.map((item) => (item.id === id) ? {id:id , ...todo } : preValue))
  }

  function toggleComplete(id){
    setTodoList((preValue)=>{
      return preValue.map((item) => {
        if(id === item.id){
          console.log(item);          
          return {
            completed : true,
            ...item
          }
        }else{
          return item
        }
      })
    })    
  }

  function getTodo(){
    let todo = JSON.parse(localStorage.getItem('todos'))   
    if(todo && todo.length){
      setTodoList(todo)   
    }    
  }

  useEffect(()=>{
    getTodo()
  } ,[])

  useEffect(()=>{
    console.log(todos);    
   localStorage.setItem('todos' , JSON.stringify(todos)) 
  } , [todos])


  return (
    <TodoProvider value={{ todos  ,addTodo ,deleteTodo ,toggleComplete ,updateTodo }}>      
      <div className='w-full h-screen font-mono flex flex-col items-center p-9'>
          <p className='text-2xl font-bold uppercase'> my todo list </p>
          <TodoForm />
          <div className='flex flex-col gap-3'>
          {
            todos.map((item , index) => (
              <TodoItem key={index} todo={item} />
            ))
          }
          </div>
      </div>
    </TodoProvider>
  )
}

export default TodoList