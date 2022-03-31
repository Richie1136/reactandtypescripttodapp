import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Todo } from "../../interface";
import { useState } from "react";
import "./Todo.css";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDo = ({ todo, todos, setTodos }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editToDo, setEditToDo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isDone: !todo.isDone } : todo)));
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = () => {
    if (!edit && !todo.isDone) {
      setEdit(!edit);
    }
  };

  const setTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditToDo(event?.target.value);
  };

  return (
    <>
      <form className="todos-single">
        {edit && <input className="todos-single---text" value={editToDo} onChange={setTodoChange} />}

        {todo.isDone ? (
          <s className="todos-single_text">{todo.todo}</s>
        ) : (
          <span className="todos-single_text">{todo.todo}</span>
        )}
        <div>
          <span className="icon" onClick={handleEdit}>
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
