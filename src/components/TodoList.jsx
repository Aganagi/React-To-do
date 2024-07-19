import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, onDeleteTodo, onUpdateTodo }) => {
  return (
    <div style={{ marginTop: "20px" }}>
      {todos &&
        todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onDeleteTodo={onDeleteTodo}
            onUpdateTodo={onUpdateTodo}
          />
        ))}
    </div>
  );
};

export default TodoList;
