import React, { useReducer, useState } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    case 'reset':
      return { count: 0 };
    case 'addby':
      return { count: state.count + Number(action.payload) };
    default:
      throw new Error('Not valid type');
  }
}

export const SimpleUseReducer = () => {
  const [inputVal, setInputVal] = useState(0);
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <h1>useReducer Example</h1>
      {state.count}
      <br />
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
      <br />
      <input value={inputVal} onChange={(e) => setInputVal(e.target.value)} />
      <button onClick={() => dispatch({ type: 'addby', payload: inputVal })}>
        Add by {inputVal}
      </button>
    </div>
  );
};
