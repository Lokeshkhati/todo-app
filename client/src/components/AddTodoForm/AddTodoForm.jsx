import { useTodo } from "../../contexts/todo-context";
import classes from "../AddTodoForm/AddTodoForm.module.css";

const AddTodoForm = ({ todo }) => {
  const {
    todos,
    dispatch,
    createTodo,
    title,
    description,
    time,
    isEditing,
    updateTodo,
    handleChange,
  } = useTodo();

  const selectedTodo = todos.find(
    (todo) => "640590c3b2b8361f2e0183b7" === todo._id
  );

  console.log(selectedTodo);

  const handleTodoInput = (event) => {
    const { name, value } = event.target;
    handleChange({ name, value });
  };
  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    isEditing ? updateTodo("640590c3b2b8361f2e0183b7") : createTodo();
  };

  return (
    <form
      style={{ backgroundColor: isEditing && "yellow" }}
      onSubmit={handleSubmit}
      className={classes.form}
    >
      <input
        name="title"
        value={title}
        type="text"
        placeholder="Add title"
        onChange={handleTodoInput}
      />
      <textarea
        name="description"
        value={
          isEditing && selectedTodo ? selectedTodo.description : description
        }
        type="text"
        placeholder="Description"
        onChange={handleTodoInput}
      />
      <input
        name="time"
        value={time}
        type="text"
        placeholder="Add Time"
        onChange={handleTodoInput}
      />
      <input
        name="time"
        value={time}
        type="text"
        placeholder="Add tags"
        onChange={handleTodoInput}
      />
      <div className={classes.btns}>
        <button className={classes.cancelButton} onClick={closeModal}>
          Cancel
        </button>

        <button type="submit" className={classes.addButton}>
          {isEditing ? "Edit" : "Add"}
        </button>
      </div>
    </form>
  );
};

export { AddTodoForm };
