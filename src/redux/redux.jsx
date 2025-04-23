import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./counter/counterSlice";
const Redux = () => {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      <div>Redux </div>
      <div className="flex justify-center mt-4 ">
        <button
          className="bg-blue-500 px-8 py-2  rounded-md text-white font-semibold"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        <p className="mx-4">Currently Count is {counter}</p>
        <button
          className="bg-green-500 px-8 py-2  rounded-md text-white font-semibold"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
    </>
  );
};

export default Redux;
