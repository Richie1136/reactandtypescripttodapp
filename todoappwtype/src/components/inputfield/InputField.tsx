import React from "react";
import "./InputField.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const InputField = ({ todo, setTodo }: Props) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="input">
      <input className="input-box" type="text" onChange={handleChange} value={todo} placeholder="Enter a Task" />
      <button className="submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default InputField;
