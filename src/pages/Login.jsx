import React, { useEffect, useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Logins } from "../redux/slice/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setshowPassword] = useState(false);
  const handleShowPassword = () => setshowPassword(!showPassword);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    dispatch(Logins());
    navigate("/");
  };

  return (
    <main className="h-screen flex justify-center items-center text-gray-500">
      <section className="block w-full mx-5 sm:w-[80%] md:w-[60%] lg:w-[25%] sm:mx-auto bg-white py-3 px-2 rounded-md shadow">
        <p className="font-bold text-center my-2 text-lg">Login</p>

        <form action="" className="flex flex-col gap-y-3">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email"
            className="border py-2 border-gray-500 rounded-md pl-2 focus:outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="flex items-center border  border-gray-500 rounded-md px-1">
            <input
              type={showPassword ? "text" : "password"}
              name=""
              id=""
              placeholder="password"
              className=" py-2 pl-2 focus:outline-none   flex-1"
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassword ? (
              <AiFillEye
                size={20}
                onClick={handleShowPassword}
                className="cursor-pointer"
              />
            ) : (
              <AiFillEyeInvisible
                size={20}
                onClick={handleShowPassword}
                className="cursor-pointer"
              />
            )}
          </div>
          <button
            onClick={handleLogin}
            className=" py-2 bg-blue-500 rounded-md text-lg font-bold text-white"
            type="button"
          >
            Login
          </button>
        </form>
        <p className="text-center my-2 font-bold text-lg">OR</p>
        <div className="flex items-center justify-center bg-blue-500 py-2 rounded-md  gap-x-2">
          <button className=" text-white  font-semibold">
            Login with Google
          </button>
          <img
            src="https://image.similarpng.com/very-thumbnail/2020/12/Colorful-google-logo-design-on-transparent-PNG-1.png"
            alt="logo-google"
            className="w-6 aspect-square rounded-full "
          />
        </div>
        <p className="text-sm  mt-3 ">
          No account? please click
          <Link to="/register" className="mx-1 text-blue-500">
            Here
          </Link>
          to register
        </p>
      </section>
    </main>
  );
};

export default Login;
