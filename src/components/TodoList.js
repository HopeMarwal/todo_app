import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {

  return (
    <div className='todo-container'>
      <ul className='todo-list'>
        {
          props.sortedTodos.map((item) => {
            return (
              <TodoItem
                todoItem={item}
                key={item.id}
                todos={props.todos}
                setTodos={props.setTodos}
              />
            )
          })
        }

      </ul>
    </div>
  )
}
