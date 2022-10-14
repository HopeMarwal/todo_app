import React, { useState, useEffect } from 'react'
import '../assets/scss/todo.scss'
//importing components
import Form from './Form'
import TodoList from './TodoList'
import ToggleTheme from './ToggleTheme'

export default function Todo() {

  //state 
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([])
  const [status, setStatus] = useState('all')
  const [sortedTodos, setSortedTodos] = useState([])
  const [isDarkTheme, setIsDarkTheme] = useState(false)

  //use effect
  useEffect(() => {
    getLocalTodos();
  }, [])
  useEffect(() => {
    handleSort();
    saveLocalTodos();
  }, [todos, status])

  //functions
  const handleSort = () => {
    switch (status) {
      case 'completed':
        setSortedTodos(todos.filter((item) => item.completed === true))
        break;
      case 'uncompleted':
        setSortedTodos(todos.filter((item) => item.completed === false))
        break;
      default:
        setSortedTodos(todos)
        break;
    }
  }

  const handleChangeTheme = () => {
    setIsDarkTheme(!isDarkTheme)
  }

  //save to Local
  const saveLocalTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }

  const getLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]))
    } else {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }
  }

  return (
    <div className={`${isDarkTheme ? 'dark' : ''} todo-component`}>
      <ToggleTheme
        checked={isDarkTheme}
        handleChange={handleChangeTheme}
      />
      <div className='todo-component_body'>
        <header>Todo List</header>
        <Form
          setInputText={setInputText}
          setTodos={setTodos}
          todos={todos}
          inputText={inputText}
          setStatus={setStatus}
          status={status}
        />
        <TodoList
          sortedTodos={sortedTodos}
          setTodos={setTodos}
          todos={todos}
        />
      </div>

    </div>
  )
}
