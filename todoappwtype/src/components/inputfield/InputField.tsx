import React from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input className="input-box" type="text" placeholder="Enter a Task" />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
