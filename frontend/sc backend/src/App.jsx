import React from "react";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp.jsx";
import Login from "./components/Login.jsx";

// Sample App component to demonstrate Tailwind CSS usage and React Router d
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
