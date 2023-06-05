import { useTodo } from "../../contexts/todo-context";
import classes from "../EditTodoForm/EditTodoForm.module.css";
import { useState } from "react";

const EditTodoForm = ({ todo, setShowModal }) => {
  const { dispatch, todos } = useTodo();
  const [title, setTitle] = useState(todo?.title);
  const [description, setDescription] = useState(todo?.description);
  const [time, setTime] = useState("");

  const editTodo = (todoId) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === todoId
        ? {
            ...todo,
            title,
            description,
            time,
          }
        : todo
    );
    dispatch({ type: "EDIT_TODO", payload: updatedTodos });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    editTodo(todo.id);
    setShowModal(false);
  };

  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <input
        value={title}
        type="text"
        placeholder="Add title"
        onChange={(event) => setTitle(event.target.value)}
      />
      <textarea
        value={description}
        type="text"
        placeholder="Description"
        onChange={(event) => setDescription(event.target.value)}
      />
      <input
        value={time}
        type="text"
        placeholder="Add Time"
        onChange={(event) => setTime(event.target.value)}
      />
      <div className={classes.btns}>
        <button
          className={classes.cancelButton}
          onClick={() => setShowModal(false)}
        >
          Cancel
        </button>
        <button type="submit" className={classes.addButton}>
          Edit
        </button>
      </div>
    </form>
  );
};

export { EditTodoForm };
