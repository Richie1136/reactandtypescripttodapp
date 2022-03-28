import "./App.css";
import InputField from "./components/inputfield/InputField";
import { useState } from "react";
import { Todo } from "./interface";
import ToDoList from "./components/todolist/ToDoList";

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

  return (
    <div className="App">
      <h2>Todo with React</h2>
      <span className="heading">Tasks</span>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <ToDoList />
    </div>
  );
}

export default App;
