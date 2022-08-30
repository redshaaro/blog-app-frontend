import { Link } from "react-router-dom";
import "./login.css";
import { Context } from "../../context/Context";
import { useContext, useRef } from "react";
import axios from 'axios'

export default function Login() {
  
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("https://simple-node-server-niru.herokuapp.com/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>username</label>
        <input  ref={userRef} className="loginInput" type="text" placeholder="Enter your username..." />
        <label>Password</label>
        <input ref={passwordRef} className="loginInput" type="password" placeholder="Enter your password..." />
        <button className="loginButton" type="submit">Login</button>
      </form>
       <Link to={"/register"}> <button className="loginRegisterButton">Register</button> </Link>
    </div>
  );
}
