import React from "react";
import Button from "@material-ui/core/Button";

const FormInput = ({ handleInputChange, handleAdd, value, error }) => {
  return (
    <form onSubmit={handleAdd}>
      <input
        className={error ? "error" : null}
        type="text"
        onChange={handleInputChange}
        placeholder="Enter Item"
      />
      <Button
        type="submit"
        variant="contained"
        style={{
          background: "white",
          border: "1px solid gray",
          marginLeft: "0.8rem",
          fontWeight: "bold",
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default FormInput;
