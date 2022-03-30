import { Todo } from "../../interface";
import ToDo from "../todo/Todo";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({ todos, setTodos }: Props) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return <ToDo key={todo.id} todo={todo} todos={todos} setTodos={setTodos} />;
      })}
    </div>
  );
};

export default ToDoList;
