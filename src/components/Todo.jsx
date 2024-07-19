import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { GrEdit } from "react-icons/gr";
import { FaCheck } from "react-icons/fa";
import "../App.css";

const Todo = ({ todo, onDeleteTodo, onUpdateTodo }) => {
  const { id, content } = todo;
  const [edit, setEdit] = useState(false);
  const [update, setUpdate] = useState(content);
  const updateNewTodo = () => {
    const request = {
      id: id,
      content: update,
    };
    onUpdateTodo(request);
    setEdit(false);
  };
  const deleteTodo = () => {
    onDeleteTodo(id);
  };
  return (
    <div className="todo-container">
      <div className="todo-content">
        <div>
          {edit ? (
            <input
              value={update}
              onChange={(e) => setUpdate(e.target.value)}
              type="text"
              className="todo-input"
            />
          ) : (
            content
          )}
        </div>
        <div className="todo-icons">
          <MdOutlineDeleteOutline
            style={{ marginRight: "12px" }}
            onClick={deleteTodo}
          />
          {edit ? (
            <FaCheck onClick={updateNewTodo} />
          ) : (
            <GrEdit
              style={{ marginRight: "12px" }}
              onClick={() => setEdit(true)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Todo;
