import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo.jsx'
import Todo from './components/Todo.jsx'
import { Provider } from 'react-redux'
import { store } from './app/todoStore.js'

function App() {
  
  return (
  <Provider store={store}>
    <AddTodo/>
    <Todo/>
  </Provider>
  )
  
}

export default App
