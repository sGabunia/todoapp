import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { gql } from "@apollo/client";
import Header from "./components/Header";
import FormInput from "./components/FormInput";
import TodoList from "./components/TodoList";

const GET_TODOS = gql`
  query getTodos {
    todos {
      done
      id
      text
    }
  }
`;

const TOGGLE_TODOS = gql`
  mutation toggleTodo($id: uuid!, $done: Boolean!) {
    update_todos(where: { id: { _eq: $id } }, _set: { done: $done }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

const ADD_TODO = gql`
  mutation addTodo($text: String!) {
    insert_todos(objects: { text: $text }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

const DELETE_TODO = gql`
  mutation deleteTodo($id: uuid!) {
    delete_todos(where: { id: { _eq: $id } }) {
      returning {
        done
        id
        text
      }
    }
  }
`;

const App = () => {
  const [todoText, setTodoText] = React.useState("");
  const { data, loading, error } = useQuery(GET_TODOS);
  const [toggleTodo] = useMutation(TOGGLE_TODOS);
  const [deleteTodo] = useMutation(DELETE_TODO);
  const [addTodo] = useMutation(ADD_TODO, {
    onCompleted: () => setTodoText(""),
  });

  async function handleToggleTodo(id, done) {
    const data = await toggleTodo({
      variables: {
        id,
        done: !done,
      },
    });
  }

  async function handleAddTodo(e) {
    e.preventDefault();
    if (!todoText.trim()) return;
    const data = await addTodo({
      variables: { text: todoText },
      refetchQueries: [{ query: GET_TODOS }],
    });
  }

  async function handleDeleteTodo(id) {
    const isConfirmed = window.confirm("Would you like to delete this todo?");
    if (isConfirmed) {
      const data = await deleteTodo({
        variables: { id },
        update: (cache) => {
          const prevData = cache.readQuery({ query: GET_TODOS });
          const newData = prevData.todos.filter((todo) => todo.id !== id);
          cache.writeQuery({ query: GET_TODOS, data: { todos: newData } });
        },
      });
    }
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Fetching error</div>;
  }
  return (
    <div className="app">
      <Header />
      <FormInput
        handleAddTodo={handleAddTodo}
        setTodoText={setTodoText}
        todoText={todoText}
      />
      <TodoList
        todos={data.todos}
        handleToggleTodo={handleToggleTodo}
        handleDeleteTodo={handleDeleteTodo}
      />
    </div>
  );
};

export default App;
