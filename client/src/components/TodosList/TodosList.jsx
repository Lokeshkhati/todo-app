import { BsFillPlusCircleFill } from "react-icons/bs";
import Header from "../Header/Header";
import { AddTodoForm } from "../AddTodoForm/AddTodoForm";
import { TodoItem } from "../TodoItem/TodoItem";
import { useTodo } from "../../contexts/todo-context";
import { useEffect, useState } from "react";
import { Modal } from "../Modal/Modal";

const TodosList = () => {
  const { todos, getTodos, dispatch } = useTodo();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getTodos();
  }, []);
  
  const openModal = () => {
    dispatch({ type: "OPEN_MODAL" });
  };
  return (
    <>
      <Header />
      <button onClick={openModal}>
        <BsFillPlusCircleFill size="25" />
      </button>
      <div className="todoContainer">
        {todos &&
          todos?.map((todo) => <TodoItem key={todo?._id} todo={todo} />)}
      </div>
      <Modal showModal={showModal} setShowModal={setShowModal}>
        <AddTodoForm setShowModal={setShowModal} />
      </Modal>
    </>
  );
};
export default TodosList;
