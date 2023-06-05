import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import { Landing } from "./pages/Landing/Landing";
import { TodoDetail } from "./pages/TodoDetail/TodoDetail";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landing-page" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/todo/:id" element={<TodoDetail />} />
      </Routes>
    </div>
  );
}

export default App;
