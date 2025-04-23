import React from "react";
import { useLocation,Link, Outlet } from "react-router-dom";
const Hooks = () => {
  const location = useLocation();
  return (
    <div>
      <nav>
        <ul className="text-red-600 font-semibold sm:flex justify-center">
        
          <li>
            <Link to="" className={location.pathname === "/" ? "text-blue-500 font-bold" : ""}>useState</Link>
          </li>
          <li>
            <Link className={`mx-4 ${location.pathname === "/use-effect" ? "text-blue-500 font-bold" : ""}`} to="use-effect" >
              useEffect
            </Link>
          </li>
          <li>
            <Link className={location.pathname === "/use-context" ? "text-blue-500 font-bold" : ""} to="use-context">useContext</Link>
          </li>
          <li>
            <Link className={`mx-4 ${location.pathname === "/use-ref" ? "text-blue-500 font-bold" : ""}`} to="use-ref">
              useRef
            </Link>
          </li>
          <li>
            <Link className={location.pathname === "/use-memo" ? "text-blue-500 font-bold" : ""} to="use-memo">useMemo</Link>
          </li>
          <li>
            <Link className={`mx-4 ${location.pathname === "/use-reducer" ? "text-blue-500 font-bold" : ""}`} to="use-reducer">
              useReducer
            </Link>
          </li>
          <li>
            <Link className={` ${location.pathname === "/callback" ? "text-blue-500 font-bold" : ""}`} to="callback">useCallBack</Link>
          </li>
        </ul>
      <p className="bg-red-400 h-1 mx-4 my-2"></p>
      </nav>
      <Outlet />
    </div>
  );
};

export default Hooks;