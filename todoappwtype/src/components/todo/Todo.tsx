import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Todo } from "../../interface";
import "./Todo.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDo = ({ todo, todos, setTodos }: Props) => {
  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <form className="todos-single">
        {todo.isDone ? (
          <s className="todos-single_text">{todo.todo}</s>
        ) : (
          <span className="todos-single_text">{todo.todo}</span>
        )}
        <div>
          <span className="icon">
            <AiFillEdit />
          </span>
          <span className="icon" onClick={() => handleDone(todo.id)}>
            <MdOutlineDownloadDone />
          </span>
          <span className="icon" onClick={() => handleDelete(todo.id)}>
            <AiFillDelete />
          </span>
        </div>
      </form>
    </>
  );
};

export default ToDo;
