import React from "react";
import dp from "../assets/dp.jpg";

function SignUp() {
  return (
    <div>
      <div className="w-full h-[100vh] bg-black flex justify-center items-center">
        <div className="w-[90%] max-w-[600px] h-[500px] bg-[#141f1f] rounded flex flex-col justify-center items-center gap-[20px]">
          <h1 className="text-white text-2xl font-bold"> SIGN UP </h1>
          <div className=" w-[100px] h-[100px] rounded-full bg-white  ">
          <div> + </div>
           <div> UPLOAD IMAGE </div>
          </div>
          <form className="w-[100%] flex flex-col gap-[20px]">
            <div className="w-[80%]  h-[50px] flex justify-center items-center flex-col gap-[10px]">
              <input
                type="text"
                placeholder="first name "
                className="w-[50%] h-[100%] bg-white rounded px-2 mb-4"
              />
              <input
                type="text"
                placeholder="last name "
                className="w-[50%] h-[100%] bg-white rounded px-2 mb-4"
              />
              <input
                type="text"
                placeholder="username "
                className="w-[80%] h-[50px] bg-white rounded px-2 mb-4"
              />
              <input
                type="email"
                placeholder="email "
                className="w-[80%] h-[50px] bg-white rounded px-2 mb-4"
              />
              <input
                type="password"
                placeholder="password"
                className="w-[80%] h-[50px] bg-white rounded px-2 mb-4"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
