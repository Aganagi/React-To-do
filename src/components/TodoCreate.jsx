import { useState } from "react";
import "../App.css";

export default function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const clearInput = () => {
    setNewTodo("");
  };
  const createTodo = () => {
    if (!newTodo) return;
    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div className="TodoCreate">
      <input
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        type="text"
        placeholder="Add new todo"
        className="todo-input"
      />
      <button onClick={createTodo} className="btn-create">
        Create
      </button>
    </div>
  );
}
