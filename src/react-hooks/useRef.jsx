import { useRef,useState } from "react"
import React  from 'react'

 const UseRef = () => {
    const countRef = useRef(0);
    const inputRef = useRef()
    const [render, setRender] = useState(0);
  
    const increment = () => {
      countRef.current++;
      console.log("Current count:", countRef.current);
    };
   const renderer = ()=>{
    setRender(render + 1);
    console.log('render', render)
   }
  return (
    <div>
        <h4 className="text-sm font-semibold">UseRef Ex:1 </h4>
        <p>Re-renders: {render}</p>
    <button onClick={increment}>Render with UseRef</button>
    <button onClick={renderer}>Render with useState</button>
    <h4>UseRef Ex:2</h4>
    <input ref={inputRef} type="text" />
    <button onClick={() => inputRef.current.focus()}>Focus Input</button>
    </div>
  )
}
export default UseRef;