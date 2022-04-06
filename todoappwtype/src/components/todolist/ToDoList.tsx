import { Droppable } from "react-beautiful-dnd";
import { Todo } from "../../interface";
import ToDo from "../todo/Todo";
import "./ToDoList.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  completedTodos: Todo[];
  setCompeletedTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const ToDoList = ({ todos, setTodos, completedTodos, setCompeletedTodos }: Props) => {
  return (
    <div className="container">
      <Droppable droppableId="TodosList">
        {(provided, snapshot) => (
          <div
            className={`todos ${snapshot.isDraggingOver ? "dragactive" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading">Active Tasks</span>
            {todos.map((todo, index) => (
              <ToDo key={todo.id} index={index} todo={todo} todos={todos} setTodos={setTodos} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <Droppable droppableId="TodosRemove">
        {(provided, snapshot) => (
          <div
            className={`todos remove ${snapshot.isDraggingOver ? "dragcomplete" : ""}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <span className="todos-heading">Completed Tasks</span>
            {completedTodos.map((todo, index) => (
              <ToDo key={todo.id} index={index} todo={todo} todos={completedTodos} setTodos={setCompeletedTodos} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default ToDoList;
