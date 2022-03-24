import "./App.css";
import InputField from "./components/inputfield/InputField";
import { useState } from "react";
import { Todo } from "./interface";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <div className="App">
      <h2>Todo with React</h2>
      <span className="heading">Tasks</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
