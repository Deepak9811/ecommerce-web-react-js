import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCartFill } from "react-icons/bs";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import logo from "../assest/logo.png";
import { logoutRedux } from "../redux/userSlice";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };

  const userData = useSelector((state) => state.user);
  console.log("header :->> ", userData);

  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully.");
  };

  return (
    <div className="fixed shadow-md w-full h-16 px-2 md:px=4 z-50 bg-white">
      {/* desktop */}
      <div className="flex items-center h-full justify-between">
        <Link to={"/"}>
          <div className="h-10">
            <img src={logo} className="h-full" alt="logo" />
          </div>
        </Link>

        <div className="flex items-center gap-4 md:gap-6 ">
          <nav className="gap-4 md:gap-6 text-base md:text-lg hidden md:flex">
            <Link to={"/"}>Home</Link>
            <Link to={"menu"}>Menu</Link>
            <Link to={"about"}>About</Link>
            <Link to={"task"}>Task</Link>
            <Link to={"contact"}>Contact</Link>
          </nav>
          <div className="text-2xl text-slate-600 relative">
            <BsCartFill />
            <div className="absolute -top-1 -right-1 text-white bg-red-500 h-4 w-4 rounded-full m-0 p-0 text-sm text-center">
              0
            </div>
          </div>
          <div className=" text-slate-600" onClick={handleShowMenu}>
            <div className="text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md">
              {userData.image ? (
                <img
                  src={userData.image}
                  alt="profile"
                  className="h-full w-full"
                />
              ) : (
                <HiOutlineUserCircle />
              )}
            </div>
            {showMenu && (
              <div className="absolute right-2 bg-white  shadow drop-shadow-md flex flex-col min-w-[120px] text-center">
                {userData.email === process.env.REACT_APP_ADMIN_EMAIL && (
                  <Link
                    to={"newproduct"}
                    className="whitespace-nowrap cursor-pointer px-2 "
                  >
                    New product
                  </Link>
                )}
                {userData.image ? (
                  <p
                    onClick={handleLogout}
                    className="cursor-pointer px-2 text-white bg-red-500"
                  >
                    Logout ({userData.firstName})
                  </p>
                ) : (
                  <Link
                    to={"login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}

                <nav className=" text-base md:text-lg flex flex-col md:hidden">
                  <Link className="px-2 py-1" to={"/"}>
                    Home
                  </Link>
                  <Link className="px-2 py-1" to={"menu"}>
                    Menu
                  </Link>
                  <Link className="px-2 py-1" to={"about"}>
                    About
                  </Link>
                  <Link className="px-2 py-1" to={"contact"}>
                    Contact
                  </Link>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile */}
    </div>
  );
};

export default Header;
