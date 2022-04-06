import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { MdOutlineDownloadDone } from "react-icons/md";
import { Todo } from "../../interface";
import React, { useEffect, useRef, useState } from "react";
import "./Todo.css";
import { Draggable } from "react-beautiful-dnd";

interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  index: number;
}

const ToDo = ({ todo, todos, setTodos, index }: Props) => {
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

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const editForm = (event: React.FormEvent, id: number) => {
    event.preventDefault();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, todo: editToDo } : todo)));
    setEdit(false);
  };

  const setTodoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditToDo(event?.target.value);
  };

  return (
    <>
      <Draggable draggableId={todo.id.toString()} index={index}>
        {(provided) => (
          <form
            className="todos-single"
            onSubmit={(event) => editForm(event, todo.id)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {edit && <input className="todos-single_text" value={editToDo} onChange={setTodoChange} ref={inputRef} />}

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
        )}
      </Draggable>
    </>
  );
};

export default ToDo;
