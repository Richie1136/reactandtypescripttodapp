import { Todo } from "../../interface";
import ToDo from "../todo/Todo";
import "./ToDoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="container">
      <div className="todos">
        <span className="todos-heading">Active Tasks</span>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
      <div className="todos remove">
        <span className="todos-heading">Completed Tasks</span>
        {todos.map((todo) => (
          <ToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
