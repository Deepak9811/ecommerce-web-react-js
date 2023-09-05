import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { taskRedux } from "../../redux/taskSlice";

const Index = () => {
  const [data, setData] = useState({
    email: "",
    number: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return { ...preve, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password, confirmPassword, number } = data;

    if (email && password && confirmPassword && number) {
      if (password === confirmPassword) {
        const fetchData = await fetch(
          `${process.env.REACT_APP_SERVER_DOMAIN}/mytask/task`,
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

        dispatch(taskRedux(resp));
        if (resp.response === "ok") {
          navigate("/mytask");
        }
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter require fields");
    }
  };

  return (
    <>
      <div className="p-3 md:p-4 ">
        <div className="w-full max-w-sm bg-white m-auto flex  flex-col p-4">
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
            <label htmlFor="number">Phone Number</label>
            <input
              value={data.number}
              onChange={handleOnChange}
              type="number"
              id="number"
              name="number"
              className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            />
            <label htmlFor="password">Password</label>
            <input
              value={data.password}
              onChange={handleOnChange}
              type="password"
              id="password"
              name="password"
              className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            />
            <label htmlFor="confirmPassword">confirmPassword</label>
            <input
              value={data.confirmPassword}
              onChange={handleOnChange}
              type="confirmPassword"
              id="confirmPassword"
              name="confirmPassword"
              className="mt-1 w-full mb-2 bg-slate-200 px-2 py-1 rounded focus-within:outline-blue-300"
            />

            <button className="w-full max-w-[150px] m-auto bg-blue-500 hover:bg-red-600 cursor-pointer text-white text-xl font-medium text-center py-1 rounded-full mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Index;
