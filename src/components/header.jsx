import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const location = useLocation();
  const counter = useSelector((state) => state.counter.value)

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center md:gap-x-12 gap-x-2">
          
            <h1 className="font-bold text-3xl border bottom-2 p-2 rounded-md text-orange-500"> React Js</h1>
         
          <Link to="/"  className={` ${location.pathname === "/" ? "text-blue-500 font-semibold text-md" : 'font-semibold text-md'} `}>
            Hooks
          </Link>
          {/* <div className="hidden lg:flex lg:gap-x-12"> */}
            <Link
              to="/redux"
              className={` ${location.pathname === "/redux" ? "text-blue-500 font-semibold text-md" : 'font-semibold text-md'} `}
            >
              Redux {counter}
            </Link>
            <Link to="/todo" className={` ${location.pathname === "/todo" ? "text-blue-500 font-semibold text-md" : 'font-semibold text-md'} `}>
              Todo List
            </Link>
            <Link
              to="/uidesign"
              className={` ${location.pathname === "/uidesign" ? "text-blue-500 font-semibold text-md" : 'font-semibold text-md'} `}
            >
              Ui Design
            </Link>
          {/* </div> */}
        </div>
        <div className="hidden lg:flex">
          <Link to="/login" className="text-sm font-semibold text-gray-900">
            Log in <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
