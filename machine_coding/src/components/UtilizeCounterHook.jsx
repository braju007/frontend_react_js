import React from 'react';
import { useCounter } from '../customHooks/useCounter';

export const UtilizeCounterHook = () => {
  const { count, increment, decrement, reset } = useCounter(0, 2);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>
        Counter:{' '}
        <span style={{ color: count < 0 ? 'red' : 'green' }}>{count}</span>
      </h2>
      <button onClick={increment} style={{ margin: '0 10px' }}>
        +
      </button>
      <button onClick={decrement} style={{ margin: '0 10px' }}>
        -
      </button>
      <button onClick={reset} style={{ margin: '0 10px' }}>
        Reset
      </button>
    </div>
  );
};
