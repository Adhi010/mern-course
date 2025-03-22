import axios from "axios";
import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const loginUrl = "http://localhost:5000/api/login";

  const handleLogin = async () => {
    try {
      const response = await axios.post(loginUrl, {
        username,
        password,
      });
      const { accessToken, role } = response?.data || {};
      sessionStorage.setItem("auth_token", accessToken);
      sessionStorage.setItem("role", role);
      setAuth({ token: accessToken, role });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="login-card-container">
        <h1 className="text-center pt-5">Sign In</h1>

        <label className="text-center">UserName</label>
        <input
          className=" input-field "
          name="username"
          type="text"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
        <label className="text-center">Password</label>
        <input
          className=" input-field "
          name="password"
          type="text"
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="grey_btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </>
  );
};

export default LoginPage;
