import React from "react";

const Todo = ({ text, id, done }) => {
  return (
    <div className="todos">
      <span className="todo">{text}</span>
      <p>
        <ion-icon
          name="checkmark-outline"
          size="large"
          style={{ color: "green" }}
        ></ion-icon>
        <ion-icon name="close-outline" size="large"></ion-icon>
      </p>
    </div>
  );
};

export default Todo;
