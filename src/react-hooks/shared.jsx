import { useState } from "react"
import React from 'react'

 const Shared = ({ sendDataToParent }) => {
    console.log('Shared')
    const [inputValue, setInputValue] = useState('');

    // When a button is clicked, send the data to the parent
    const handleClick = () => {
      sendDataToParent(inputValue); // Calling the parent's function
    };
  return (
    <div>
        <h1>Shared </h1>
        <h4>Shared data to parent </h4>

      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={handleClick}>Send Data to Parent</button>
    </div>
  )
}
export default React.memo(Shared); // This render child function in parent only once(one time render)