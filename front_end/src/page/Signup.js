import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BiHide, BiShow } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import loginSignupImage from "../assest/login-animation.gif";
import { ImagetoBase64 } from "../utility/ImagetoBase64";

const Signup = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    image: "",
  });

  console.log("data :->> ", data);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleShowConfirmPassword = () => {
    setShowConfirmPassword((preve) => !preve);
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  const handleUploadProfileImage = async (e) => {
    console.log(e.target.files[0]);

    const base64 = await ImagetoBase64(e.target.files[0]);

    console.log(base64);

    setData((preve) => {
      return {
        ...preve,
        image: base64,
      };
    });
  };

  // console.log("api :->> ", process.env.REACT_APP_SERVER_DOMAIN);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, email, password, confirmPassword } = data;

    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/users/signup`,
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
        console.log("data :->> ", resp);

        toast(resp.response);
        if (resp.response === "ok") {
          navigate("/login");
        }
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter require fields");
    }
  };

  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
        <h1 className="text-center text-2xl font-bold">Sign Up</h1>

        <div className="w-20 h-20 overflow-hidden rounded-full drop-shadow-md shadow-md m-auto relative ">
          <img
            src={data.image ? data.image : loginSignupImage}
            alt="loginSignupImage"
            className="w-full h-full"
          />

          <label htmlFor="profileImage">
            <div className="absolute bottom-0 h-1/3 bg-slate-500 bg-opacity-50 w-full text-center cursor-pointer">
              <p className="text-sm p-1 text-white ">upload</p>
            </div>
            <input
              accept="image/*"
              type="file"
              id="profileImage"
              className="hidden"
              onChange={handleUploadProfileImage}
            />
          </label>
        </div>

        <form onSubmit={handleSubmit} className="w-full py-3 flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            value={data.firstName}
            onChange={handleOnChange}
            type="text"
            id="firstName"
            name="firstName"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            value={data.lastName}
            onChange={handleOnChange}
            type="text"
            id="lastName"
            name="lastName"
            className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
          />
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
          {/* confirm password */}
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-2 py-1 bg-slate-200 rounded mt-1 mb-2 focus-within:outline focus-within:outline-blue-300">
            <input
              value={data.confirmPassword}
              onChange={handleOnChange}
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowConfirmPassword}
            >
              {showConfirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button className="w-full max-w-[150px] m-auto bg-red-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
            Sign up
          </button>
        </form>

        <p className="text-left text-sm mt-2 ">
          Already have account ?{" "}
          <Link to={"/login"} className="text-red-500 underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
