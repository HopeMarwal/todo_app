import React, { useState } from 'react'

export default function TodoItem(props) {
  const [isDeleted, setIsDeleted] = useState(false)

  const handleDelete = () => {
    setIsDeleted(true)
    setTimeout(() => {
      props.setTodos(props.todos.filter((el) => el.id !== props.todoItem.id))
    }, 500);

  }

  const handleComplete = () => {
    props.setTodos(props.todos.map(item => {
      if (item.id === props.todoItem.id) {
        return {
          ...item,
          completed: !item.completed
        }
      }
      return item;
    }))
  }

  return (
    <div className={`todo ${isDeleted ? 'deleted' : ''}`}>
      <li className={`todo-item ${props.todoItem.completed ? "completed" : ''}`}>{props.todoItem.text}</li>

      <button onClick={handleComplete} className={`${props.todoItem.completed ? 'completed' : ''} complete-btn`}>
        {
          !props.todoItem.completed
            ? (<i className='fas fa-check'></i>)
            : (<i className='fas fa-times'></i>)
        }


      </button>

      <button onClick={handleDelete} className='trash-btn'>
        <i className='fas fa-trash-alt'></i>
      </button>
    </div>
  )
}
