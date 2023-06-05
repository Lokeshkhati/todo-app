import { useTodo } from "../../contexts/todo-context";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm";
import classes from "../TodoItem/TodoItem.module.css";
import { Modal } from "../Modal/Modal";
import { MdDeleteOutline } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";
const TodoItem = ({ todo }) => {
  const { dispatch, deleteTodo, toggleComplete, changeBgColor } = useTodo();

  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
    dispatch({ type: "SET_EDIT" });
  };

  const colors = ["red", "green", "blue", "yellow", "purple"];

  return (
    <>
      <div style={{ background: todo.bgColor }} className={classes.todo}>
        <div className={classes.todoContent}>
          <input
            type="checkbox"
            checked={todo?.completed}
            onChange={() => toggleComplete(todo?._id)}
          />
          <Link to={`/todo/${todo?._id}`}>
            <p
              style={{ textDecoration: todo?.completed ? "line-through" : "" }}
            >
              {todo?.title}
            </p>
          </Link>
        </div>
        <div
          style={{
            width: "100px",
            backgroundColor: "white",
            display: "flex",
            gap: "5px",
            padding: ".2rem",
          }}
        >
          {colors.map((color) => (
            <div
              key={color}
              style={{
                backgroundColor: color,
                width: ".8rem",
                height: ".8rem",
                borderRadius: "50%",
              }}
              onClick={() => changeBgColor(todo._id, color)}
            ></div>
          ))}
        </div>
        <div>
          <button title="Edit icon" onClick={openModal}>
            <FiEdit size="20" />
          </button>
          <button title="Delete icon" onClick={() => deleteTodo(todo._id)}>
            <MdDeleteOutline size="20" />
          </button>
        </div>
      </div>

      <Modal>
        <AddTodoForm todo={todo} />
      </Modal>
    </>
  );
};
export { TodoItem };
