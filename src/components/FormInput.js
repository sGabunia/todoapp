import React from "react";

const FormInput = () => {
  return (
    <form>
      <input type="text" placeholder="Create your todo" />
      <button type="submit" className="create">
        Create
      </button>
    </form>
  );
};

export default FormInput;
