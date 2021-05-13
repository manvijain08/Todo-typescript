import React, { useState } from 'react';
// import { TodoListItem } from './TodoListItem';
import { TodoList } from './TodoList';
import { AddTodoForm } from './AddTodoForm';

const initialTodos : Todo[] = [
  {
      text: 'React',
      complete: false,
  },

  {
    text: 'Python',
    complete: true,
  },
];

function App() {
  const [todos, setTodos] = useState(initialTodos);
  
  const toggleTodo = (selectedTodo: Todo) => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete,
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return <TodoList todos={todos} toggleTodo={toggleTodo} />;
  <AddTodoForm />
}

export default App;