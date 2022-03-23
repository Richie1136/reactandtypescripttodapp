import "./App.css";
import InputField from "./components/inputfield/InputField";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState<string>("");

  return (
    <div className="App">
      <h2>Todo with React</h2>
      <span className="heading">Tasks</span>
      <InputField todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default App;
