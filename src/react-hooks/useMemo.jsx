import React, {useMemo, useState} from 'react'

 const UseMemo = () => {
    const [count, setCount] = useState(0);
    const [multiplier, setMultiplier] = useState(2);
    const result = useMemo(() => {
        console.log("Calculating...");
        return count * multiplier;
      }, [count, multiplier]);

  return (
    <div>
        <h4 className="text-sm font-semibold">UseMemo</h4>
  <p>Result: {result}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setMultiplier(multiplier + 1)}>
        Increment Multiplier
      </button>
    </div>
  )
}
export default UseMemo;