import { useParams } from "react-router-dom";
import Details from "../../components/Details/Details";
import { useTodo } from "../../contexts/todo-context";

const TodoDetail = () => {
  const { id } = useParams();
  const { todos } = useTodo();

  const todo = todos.find((todo) => todo._id.toString() === id);

  return <Details todo={todo} />;
};
export { TodoDetail };
