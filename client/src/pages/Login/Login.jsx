import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import baseUrl from "../../backendUrl";
import apiClient from "../../services/api-client";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginHandler = async (event) => {
    const userData = { email, password};
    try {
      const { data } = await apiClient.post(`/login`, userData, {
        withCredentials: true,
      });
      console.log(data);
      if (data.token) {
        // navigate("/", { replace: true });
        alert("login successful");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <form onSubmit={loginHandler}>
      <input
        aria-label="email"
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <input
        aria-label="password"
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};
export { Login };
