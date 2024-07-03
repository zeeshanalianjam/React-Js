import React, {createContext, useContext}  from 'react'

// create a context
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'Learn React',
            completed: false,

        }
        
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    completeTodo: (id) => {}
})

// Provider component
export const TodoProvider = TodoContext.Provider

// Consumer component
export const UseTodo = () => {
    return useContext(TodoContext);
}