import React ,{useReducer} from 'react'

 const UseReducer = () => {
    // const initialState = { count: 0 };
    const initialState = {counter: 0}

    function reducer(state, action){
        switch(action.type){
            case 'increment':
            return {counter: state.counter + 1};
            case 'decrement':
                return {counter: state.counter - 1};
                case 'reset':
                    return initialState
                  default:
            throw new Error();
        }
    }
    // function reducers(state, action) {
    //   switch (action.type) {
    //     case 'increment':
    //       return { count: state.count + 1 };
    //     case 'decrement':
    //       return { count: state.count - 1 };
    //     case 'reset':
    //       return initialState;
    //     default:
    //       throw new Error();
    //   }
    // }
    const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
         <h4 className="text-sm font-semibold">UseReducer</h4>
         <div>
      <h1>Count: {state.counter}</h1>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </div>
    </div>
  )
}

export default UseReducer;