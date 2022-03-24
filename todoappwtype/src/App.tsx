import "./App.css";
import InputField from "./components/inputfield/InputField";
import { useState } from "react";
import { Todo } from "./interface";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  console.log(todos);

  return (
    <div className="App">
      <h2>Todo with React</h2>
      <span className="heading">Tasks</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
    </div>
  );
}

export default App;
