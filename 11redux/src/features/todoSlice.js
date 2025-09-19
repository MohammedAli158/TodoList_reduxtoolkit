import { createSlice,nanoid } from "@reduxjs/toolkit";
const initialState = {
    todos : [
     {id : 1,text : "hello world"}
    ]
}
export const todoSlice = createSlice(
   {
    name : 'todo',
    initialState,
    reducers :{
        addTodo : (state,action)=>{

                state.todos.push({
                    id : nanoid(),
                    text : action.payload
                })
        },
        removeTodo : (state,action)=>{
            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        editTodo : (state,action)=>{
            state.todos = state.todos.map((todo)=>(todo.id === action.payload.id)? {
                ...todo,text:action.payload.text
            }:todo)
        }

    }
   }

)
export const {addTodo,removeTodo,editTodo} = todoSlice.actions;