import React from "react";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          className="h-12 cursor-pointer"
          alt="menu"
          src="https://cdn4.iconfinder.com/data/icons/navigation-40/24/hamburger-menu-512.png"
          onClick={() => toggleMenuHandler()}
        />
        <img
          className="h-12"
          alt="logo"
          src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo.png"
        />
      </div>
      <div className="col-span-10 px-10">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
          placeholder="Search"
        />
        <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">
          🔍
        </button>
      </div>
      <div className="col-span-1">
        <img
          className="h-12"
          alt="userIcon"
          src="https://toppng.com/public/uploads/preview/user-account-management-logo-user-icon-11562867145a56rus2zwu.png"
        />
      </div>
    </div>
  );
};

export default Head;
