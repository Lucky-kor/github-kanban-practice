import TodoForm from './component/TodoForm';
import Todo from './component/Todo';
import { useState } from 'react';
import './todos.css';
import React = require('react');

export interface TodoItem {
  id: number;
  text?: string;
  isComplete: boolean;
}

function Todos() {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  const addTodo = (todo: TodoItem): void => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos: TodoItem[] = [todo, ...todos];

    setTodos(newTodos);
  };


  const removeTodo = (id: number): void => {
    const removeArr: TodoItem[] = [...todos].filter(todo => todo.id !== id);

    setTodos(removeArr);
  };

  const completeTodo = (id: number): void => {
    const completedTodo: TodoItem[] = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }

      return todo;
    })

    setTodos(completedTodo);
  }

  return (
    <div>
      <div className="todo-app">
        <h1>To Do List</h1>
        <h2>오늘은 무슨 일을 계획하나요?</h2>
        <TodoForm onSubmit={addTodo} />
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
        />
      </div>
    </div>
  );
}

export default Todos;
