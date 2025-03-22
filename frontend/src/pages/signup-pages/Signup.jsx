import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  // const regUrl = `${import.meta.env.VITE_REACT_API}/api/register`;
  const regUrl = `http://localhost:5000/api/register`;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleReg = async () => {
    try {
      const response = await axios.post(regUrl, {
        username,
        password,
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="login-card-container">
      <h1 className="text-center pt-5">Sign Up!</h1>

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

      <button className="grey_btn" onClick={handleReg}>
        register
      </button>
    </div>
  );
};

export default Signup;
