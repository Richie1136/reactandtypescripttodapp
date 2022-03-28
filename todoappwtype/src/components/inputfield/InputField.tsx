import React, { useRef } from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (event: React.FormEvent<HTMLFormElement>) => void;
}

const InputField = ({ todo, setTodo, handleAdd }: Props) => {
  const inputRef = useRef(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  return (
    <form onSubmit={handleAdd} className="input">
      <input
        ref={inputRef}
        className="input-box"
        type="text"
        onChange={handleChange}
        value={todo}
        placeholder="Enter a Task"
      />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
