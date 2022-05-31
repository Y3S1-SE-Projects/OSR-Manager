import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { axiosInstance } from "../../config";
=======
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
import "./register.css";
import Notification from "../../utils/Notification"

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
<<<<<<< HEAD
      const res = await axiosInstance.post("/auth/register", {
=======
      const res = await axios.post("/auth/register", {
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login") && Notification('success','User registered');
    } catch (err) {
      setError(true);
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
        <button className="registerButton" type="submit">
          Register
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
          Login
        </Link>
      </button>
<<<<<<< HEAD
      {error && (
        <span style={{ color: "red", marginTop: "10px" }}>
          Something went wrong!
        </span>
      )}
=======
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
>>>>>>> 6f8764d5726ce256f035584c2b23aa38ae8a4535
    </div>
  );
}
