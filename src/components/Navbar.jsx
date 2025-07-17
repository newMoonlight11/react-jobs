import React from "react";
import logo from "../assets/images/logo.png";
const Navbar = () => {
  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="flex h-20 items-center justify-between">
        <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
          <a
            className="flex flex-shrink-0 items-center mr-4"
            href="/index.html"
          >
            <img className="h-10 w-auto" src={logo} alt="Logo de react jobs" />
            <span className="hidden md:block text-white text-2xl font-bold ml-2">
              React Jobs
            </span>
          </a>
          <div className="md:ml-auto">
            <div className="flex space-x-2">
              <a href="" className="">
                Home
              </a>
              <a href="" className="">
                Jobs
              </a>
              <a href="" className="">
                Add Job
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
