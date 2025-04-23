import React, { useState } from "react";

const UseState = () => {
    const [isVisible, setIsvisible]= useState(false)
  return (
    <div>
      <h4 className="text-sm font-semibold">Use State</h4>
      <button className="btn bg-green-400 px-4 py-2 rounded-sm" onClick={()=> setIsvisible(!isVisible)}>
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible ? <p>Hello, I am visible now!</p> : ''}
    </div>
  );
};
export default UseState;
