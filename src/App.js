import React, { useState } from "react";
import FormInput from "./components/FormInput";
import Todo from "./components/Todo";

function App() {
  const [todo, setTodo] = useState({ todo: "", id: 0 });
  const [todos, setTodos] = useState([]);
  const [error, setError] = useState(false);

  const addTodo = (e) => {
    e.preventDefault();
    console.dir(e.target);
    if (todo.todo) {
      setTodos([...todos, todo]);
      e.target[0].value = "";
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
        <h2>
          You have {todos.length} {todos.length > 1 ? "Todos" : "Todo"}{" "}
        </h2>
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
          error={error}
        />
      </div>
    </div>
  );
}

export default App;
