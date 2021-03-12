import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, handleToggleTodo, handleDeleteTodo }) => {
  return (
    <>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          handleToggleTodo={handleToggleTodo}
          handleDeleteTodo={handleDeleteTodo}
        />
      ))}
    </>
  );
};

export default TodoList;
