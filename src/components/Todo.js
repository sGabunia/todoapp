import React from "react";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

const Todo = ({ todo, handleRemove }) => {
  return (
    <div className="todo">
      <p>{todo}</p>
      <HighlightOffIcon onClick={handleRemove}></HighlightOffIcon>
    </div>
  );
};

export default Todo;
