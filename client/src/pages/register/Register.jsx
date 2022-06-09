import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import Notification from "../../utils/Notification";
import React from "react";
import { SERVER_URL } from "../../utils/config";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [roles, setRoles] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post(
        "https://osr-manager-server.herokuapp.com/auth/register",
        {
          username,
          email,
          password,
          roles,
        }
      );
      res.data &&
        window.location.replace("/login") &&
        Notification("success", "User registered");
    } catch (err) {
      setError(true);
      console.log(err);
      Notification("error", `${err.response.data}`);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">Register</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your username..."
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>Email</label>
        <input
          type="text"
          className="registerInput"
          placeholder="Enter your email..."
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          className="registerInput"
          placeholder="Enter your password..."
          onChange={(e) => setPassword(e.target.value)}
        />
        <label>Roles</label>
        <select
          aria-label="Default select example"
          type="roles"
          className="registerInput"
          name="roles"
          onChange={(e) => setRoles(e.target.value)}
        >
          <option value="user">Student</option>
          <option value="panel">Panel</option>
          <option value="supervisor">Supervisor</option>
          <option value="admin">Admin</option>
        </select>
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>

      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
    </div>
  );
}
