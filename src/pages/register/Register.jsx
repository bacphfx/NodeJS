import "./register.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../util/axios";

const Register = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  const [error, setError] = useState({});
  console.log(error);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/auth/register", credentials);
      window.alert("Register successfully!");
      navigate("/login");
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <div className="lContainer">
        <input
          type="text"
          placeholder="username"
          id="username"
          onChange={handleChange}
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          id="password"
          onChange={handleChange}
          className="lInput"
        />
        <button onClick={handleClick} className="lButton">
          Create Account
        </button>
        {error && <span>{error.message}</span>}
      </div>
    </div>
  );
};

export default Register;
