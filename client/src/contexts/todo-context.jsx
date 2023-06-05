import { createContext, useContext, useEffect, useReducer } from "react";
import { initialState, todoReducer } from "../reducers/todoReducer";
import baseUrl from "../backendUrl";
import axios from "axios";
import apiClient from "../services/api-client";

const TodoContext = createContext();

const useTodo = () => useContext(TodoContext);
const TodoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);
  const { todos, isEditing, showModal } = state;

  const selectedTodo = todos.find((todo) => todo.id);
  // const [todo, setTodo] = useState({
  //   title: isEditing? "",
  //   description: "",
  //   time: "",
  //   completed: false,
  //   tags: [],
  //   bgColor: "red",
  // });

  const getTodos = async () => {
    const { data } = await axios.get(`${baseUrl}/`, { withCredentials: true });
    dispatch({
      type: "FETCH_TODOS",
      payload: data.todos
        .slice()
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)),
    });
  };

  const createTodo = async () => {
    try {
      const { title, description, time, tags } = state;
      const newTodo = { title, description, time, tags };

      const { data } = await apiClient.post(`/create`, newTodo, {
        withCredentials: true,
      });

      dispatch({ type: "CREATE_TODO", payload: data.todo });
      dispatch({ type: "CLOSE_MODAL" });
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateTodo = async (id) => {
    const { title, description, time, tags } = state;
    const updatedTodo = { title, description, time, tags };
    try {
      await axios.put(`${baseUrl}/${id}`, updatedTodo, {
        withCredentials: true,
      });
      dispatch({ type: "EDIT_TODO", payload: id });
      dispatch({ type: "CLOSE_MODAL" });
    } catch (error) {
      console.log(error.message);
    }
  };
  const deleteTodo = async (id) => {
    try {
      dispatch({ type: "DELETE_TODO", payload: id });
      await axios.delete(`${baseUrl}/${id}`, {
        withCredentials: true,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  const toggleComplete = async (id) => {
    try {
      await axios.patch(`${baseUrl}/${id}/completed`, {
        withCredentials: true,
      });
      dispatch({ type: "TOGGLE_COMPLETE", payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  const changeBgColor = async (id, color) => {
    await axios.patch(
      `${baseUrl}/${id}/changeBgColor`,
      { bgColor: color },
      {
        withCredentials: true,
      }
    );
    dispatch({ type: "CHANGE_BG_COLOR", payload: { id, color } });
  };
  const handleChange = ({ name, value }) => {
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };

  return (
    <TodoContext.Provider
      value={{
        todos,
        dispatch,
        createTodo,
        deleteTodo,
        toggleComplete,
        changeBgColor,
        getTodos,
        handleChange,
        isEditing,
        showModal,
        updateTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export { useTodo, TodoProvider };
