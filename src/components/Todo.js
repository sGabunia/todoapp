import React from "react";

const Todo = ({ text, id, done, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <div className="todos">
      <span className="todo" style={{ textDecoration: done && "line-through" }}>
        {text}
      </span>
      <p>
        <ion-icon
          onClick={() => handleToggleTodo(id, done)}
          name="checkmark-outline"
          style={{ color: "green" }}
        ></ion-icon>
        <ion-icon
          name="close-outline"
          onClick={() => handleDeleteTodo(id)}
        ></ion-icon>
      </p>
    </div>
  );
};

export default Todo;
