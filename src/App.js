import React, { useState } from "react";
import FormInput from "./components/FormInput";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState({ todo: "", id: 0 });
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    if (todo.todo) {
      setTodos([...todos, todo]);
      setTodo({ todo: "", id: 0 });
      setError(false);
    } else {
      setError(true);
    }
  };

  const removeTodo = (id) => {
    const newToDos = todos.filter((todo) => todo.id !== id);
    setTodos(newToDos);
  };

  const handleChange = (e) => {
    setTodo({ todo: e.target.value, id: Date.now() });
  };

  return (
    <div className="app">
      <div className="todos">
        <h2>You have {todos.length} Todos</h2>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo.todo}
            handleRemove={() => removeTodo(todo.id)}
          />
        ))}
        <FormInput
          handleInputChange={handleChange}
          handleAdd={addTodo}
          value={todo.todo}
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
