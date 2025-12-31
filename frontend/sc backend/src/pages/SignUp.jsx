import React, { useState, useRef, useContext } from "react";
import axios from "axios";
import dp from "../assets/dp.jpg";
import { dataContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const fileRef = useRef(null);
  const { serverUrl } = useContext(dataContext);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [frontendImage, setFrontendImage] = useState(dp);
  const [backendImage, setBackendImage] = useState(null);

  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    setBackendImage(file);
    setFrontendImage(URL.createObjectURL(file));
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${serverUrl}/api/signup`,
        { firstName, lastName, userName, email, password },
        { withCredentials: true }
      );
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
      alert("Signup failed");
    }
  };

  return (
    <div className="w-full h-screen bg-black flex justify-center items-center">
      <div className="w-[90%] max-w-[600px] bg-[#141f1f] rounded p-6 flex flex-col items-center gap-6">
        <h1 className="text-white text-2xl font-bold">SIGN UP</h1>

        <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden">
          <img
            src={frontendImage}
            alt="profile"
            className="w-full h-full object-cover"
          />
          <div
            onClick={() => fileRef.current.click()}
            className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 flex justify-center items-center text-white text-2xl cursor-pointer"
          >
            +
          </div>
        </div>

        <form
          onSubmit={handleSignUp}
          className="w-full flex flex-col items-center gap-4"
        >
          <input type="file" hidden ref={fileRef} onChange={handleImage} />

          <input
            type="text"
            placeholder="First Name"
            className="w-[80%] h-[45px] rounded px-2"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Last Name"
            className="w-[80%] h-[45px] rounded px-2"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Username"
            className="w-[80%] h-[45px] rounded px-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />

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
            SIGN UP
          </button>

          <p
            className="text-white cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account?{" "}
            <span className="text-blue-400">LOGIN</span>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
