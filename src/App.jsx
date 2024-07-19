import { useState } from "react";
import "./App.css";
import TodoCreate from "./components/TodoCreate.jsx";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([]);
  const createTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };
  const deleteTodo = (todoId) => {
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  };
  const updateTodo = (newTodo) => {
    const updateTodos = todos.map((todo) => {
      if (todo.id !== newTodo.id) {
        return todo;
      }
      return newTodo;
    });
    setTodos([...updateTodos]);
  };
  return (
    <div className="top">
      <div className="container">
        <TodoCreate onCreateTodo={createTodo} />
        <TodoList
          todos={todos}
          onDeleteTodo={deleteTodo}
          onUpdateTodo={updateTodo}
        />
      </div>
    </div>
  );
}

export default App;
