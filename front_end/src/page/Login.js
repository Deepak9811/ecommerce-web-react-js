import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import loginSignupImage from "../assest/login-animation.gif";
import { loginRedux } from "../redux/userSlice";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const userData = useSelector((state) => state);
  console.log("userData :->> ", userData.user);
  const dispatch = useDispatch();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = data;

    if (email && password) {
      const fetchData = await fetch(
        `${process.env.REACT_APP_SERVER_DOMAIN}/users/login`,
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      const resp = await fetchData.json();

      if (resp.response === "ok") {
        toast("Login is successfully");

        setTimeout(() => {
          dispatch(loginRedux(resp));
          console.log("data :->> ", userData);
          navigate("/");
        }, 1000);
      } else {
        toast(resp.message);
      }
    } else {
      alert("Please Enter require fields");
    }
  };

  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>
        <div className="w-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto">
          <img
            src={loginSignupImage}
            alt="loginSignupImage"
            className="w-full"
          />
        </div>

        <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
          <label htmlFor="email">Email</label>
          <input
            value={data.email}
            onChange={handleOnChange}
            type="email"
            id="email"
            name="email"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
          {/* ----------Password------------- */}
          <label htmlFor="password">Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              value={data.password}
              onChange={handleOnChange}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Login
          </button>
        </form>

        <p className="text-left text-sm mt-2 ">
          Don't have account ?{" "}
          <Link to={"/signup"} className="text-red-500 underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
