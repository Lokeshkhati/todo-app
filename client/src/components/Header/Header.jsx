import classes from "../Header/Header.module.css";
import { useEffect, useState } from "react";
import baseUrl from "../../backendUrl";
import axios from "axios";
const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    getCurrentUser();
  }, []);

  const getCurrentUser = async () => {
    const { data } = await axios.get(`${baseUrl}/getCurrentUser`, {
      withCredentials: true,
    });
    setUser(data.user.username);
  };
  
  return <header className={classes.header}>Welcome back {user}!</header>;
};
export default Header;
