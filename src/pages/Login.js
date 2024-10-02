

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "test@mock.com" && password === "testing123") {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/assets");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="relative flex justify-center items-center h-screen bg-gradient-to-r from-purple-900 via-purple-700 to-purple-600">
      <form
        onSubmit={handleSubmit}
        className="bg-white bg-opacity-90 p-6 rounded-lg shadow-lg backdrop-blur-md"
      >
        <h1 className="text-2xl mb-4 text-center">Login</h1>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-4 p-2 border border-gray-300 rounded"
        />
        <button
          type="submit"
          className="w-full bg-purple-700 hover:bg-purple-800 text-white p-2 rounded"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;



