import React, { useState, useContext } from "react";
import axios from "axios";
import { dataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { serverUrl } = useContext(dataContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${serverUrl}/api/login`,
        { email, password },
        { withCredentials: true }
      );
      console.log(data);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[600px] bg-[#141f1f] rounded p-6 flex flex-col items-center gap-6">
        <h1 className="text-white text-2xl font-bold">LOGIN</h1>

        <form
          onSubmit={handleLogin}
          className="w-full flex flex-col items-center gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            className="w-[80%] h-[45px] rounded px-2"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-[80%] h-[45px] rounded px-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#07c7e4] px-6 py-2 rounded font-semibold">
            LOGIN
          </button>

          <p
            className="text-white cursor-pointer"
            onClick={() => navigate("/signup")}
          >
            Don’t have an account?{" "}
            <span className="text-blue-400">SIGN UP</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
