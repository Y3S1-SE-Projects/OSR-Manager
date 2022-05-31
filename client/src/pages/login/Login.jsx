import axios from "axios";
<<<<<<< HEAD
import { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { axiosInstance } from "../../config";
=======
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
<<<<<<< HEAD
      const res = await axiosInstance.post("/auth/login", {
=======
      const res = await axios.post("/auth/login", {
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

<<<<<<< HEAD
  // For Testing
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({});

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      // fetching external fake api user
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users/1"
      );
      setUser(data);
    } catch {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="login">
      <span className="loginTitle">Login</span>
      <span className="user">{user.name}</span>
=======
  return (
    <div className="login">
      <span className="loginTitle">Login</span>
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="loginInput"
<<<<<<< HEAD
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
=======
          placeholder="Enter your username..."
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
          ref={userRef}
        />
        <label>Password</label>
        <input
          type="password"
          className="loginInput"
<<<<<<< HEAD
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          ref={passwordRef}
        />
        <button
          className="loginButton"
          type="submit"
          disabled={isFetching || !username || !password}
          onClick={handleSubmit}
        >
          {loading ? "please wait" : "Login"}
        </button>
        <span
          data-testid="error"
          style={{ visibility: error ? "visible" : "hidden" }}
        >
          Something went wrong!
        </span>
      </form>
      {/* <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button> */}
=======
          placeholder="Enter your password..."
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
          Login
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
          Register
        </Link>
      </button>
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
    </div>
  );
}
