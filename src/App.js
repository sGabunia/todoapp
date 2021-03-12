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

const App = () => {
  const { data, loading, error } = useQuery(GET_TODOS);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Fetching error</div>;
  }
  return (
    <div className="app">
      <Header />
      <FormInput />
      <TodoList todos={data.todos} />
    </div>
  );
};

export default App;
