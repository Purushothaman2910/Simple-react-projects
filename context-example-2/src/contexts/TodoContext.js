import { createContext , useContext } from "react";

export const TodoContext = createContext({
    todos : [
        {
            id : 1 ,
            todo : 'Todo message' ,
            completed : false
        }
    ] ,
    addTodo : (todo)=> {}  ,    
    updateTodo : (id , todo) => {} ,
    deletTodo : (id) => {}  ,
    toggleComplete : (id) => {}
})

export function useTodo(){
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider