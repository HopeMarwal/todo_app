import React from 'react'

export default function Form(props) {
  const handleInputText = (e) => {
    props.setInputText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!props.inputText) {
      return
    }

    props.setTodos([
      ...props.todos,
      {
        text: props.inputText,
        completed: false,
        id: Math.random() * 1000
      }
    ])

    props.setInputText('')
  }

  const handleStatusChange = (e) => {
    props.setStatus(e.target.value)
  }
  return (
    <form>
      <div className='input'>
        <input
          type='text'
          className='todo-input'
          onChange={handleInputText}
          value={props.inputText}
        />

        <button
          onClick={handleSubmit}
          type="submit"
          className='todo-button'
        >
          <i className='fas fa-plus-square'></i>
        </button>
      </div>


      <div className='select'>

        <select onChange={handleStatusChange} name='todos' className='filter-todo'>
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>

      </div>
    </form>
  )
}
