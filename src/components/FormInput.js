import React from "react";

const FormInput = ({ handleAddTodo, setTodoText, todoText }) => {
  return (
    <form onSubmit={handleAddTodo}>
      <input
        type="text"
        placeholder="Create your todo"
        maxLength="25"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button type="submit" className="btn-create">
        Create
      </button>
    </form>
  );
};

export default FormInput;
