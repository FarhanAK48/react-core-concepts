import React, {useCallback, useState} from 'react'
import Shared from './shared';

 const CallBack = () => {
  const [count, setCount] = useState(0);
  const [childData, setChildData] = useState('');
  const handleChildData = (data) => {
    setChildData(data);
  };
//  const newFn = () => {} // re-render it gave new instance of this function. To avoid re-render we will use useCallback.
 const newFn = useCallback(() =>{},[]) // UseCallBack catch function in catch memory and use catched function Because function is same to use memory function not new. New render when dependency changed if dependency is set.
  return (
    <div>
        <h1 className="text-sm font-semibold">UseCallback hook </h1>
      <Shared sendDataToParent={handleChildData} newFn={newFn}/> 
      <p>Purpose of useCallBack hook? Ans = UseCallBack catch function in catch memory and use catched function Because function is same to use memory function not new. New render when dependency changed if dependency is set.</p>
      <p>Above function is re-render with refernece equality. On re-render it gave new instance of this function.</p>
      
      <p>Child Data: {childData}</p>
      <p>count: {count}</p>
      <button onClick={() => { setCount(prev => prev + 1 )}}>Counter Increment</button>
    </div>
  )
}
export default CallBack;