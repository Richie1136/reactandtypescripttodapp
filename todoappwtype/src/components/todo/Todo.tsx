import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Todo } from "../../interface";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDo = ({ todo, todos, setTodos }: Props) => {
  return (
    <>
      <form className="todos-single">
        <span className="todos-signle_text">{todo.todo}</span>
        <AiFillDelete />
        <AiFillEdit />
        <MdOutlineDownloadDone />
      </form>
    </>
  );
};

export default ToDo;
