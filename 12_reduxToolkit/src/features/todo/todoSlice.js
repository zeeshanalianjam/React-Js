import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text: "Hello Redux "}]
}
console.log(initialState);

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                 text: action.payload + " "
            }
            console.log(todo);
            state.todos.push(todo)
            console.log(state.todos);
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            state.todos = state.todos.map((todo) => todo.id === action.payload.id? action.payload : todo)
        }

    }
})


export const { addTodo, removeTodo, updateTodo } = todoSlice.actions

export default todoSlice.reducer

