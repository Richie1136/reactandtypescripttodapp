import "./App.css";
import InputField from "./components/inputfield/InputField";
import { useState } from "react";
import { Todo } from "./interface";
import ToDoList from "./components/todolist/ToDoList";
import { DragDropContext, DropResult } from "react-beautiful-dnd";

function App() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleAdd = (event: React.FormEvent) => {
    event?.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) return;

    if (destination.droppableId === source.droppableId && destination.index === source.index) return;

    let add;
    let active = todos;
    let complete = completedTodos;

    if (source.droppableId === "TodosList") {
      add = active[source.index];
      active.splice(source.index, 1);
    } else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }

    if (destination.droppableId === "TodosList") {
      active.splice(destination.index, 0, add);
    } else {
      complete.splice(destination.index, 0, add);
    }
    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="App">
        <h2>Todo with React</h2>
        <span className="heading">Tasks</span>
        <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
        <ToDoList
          todos={todos}
          setTodos={setTodos}
          completedTodos={completedTodos}
          setCompeletedTodos={setCompletedTodos}
        />
      </div>
    </DragDropContext>
  );
}

export default App;
