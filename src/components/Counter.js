// Simple react counter app using the useState hook
import React, { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleClick = (type) => {
    type === 'increment' ? setCounter(counter + 1) : setCounter(counter - 1);
  };

  return (
    <div className='counter'>
      <h2>Counter: {counter}</h2>
      <div className='buttons'>
        <button onClick={() => handleClick('increment')}>Increment</button>
        <button onClick={() => handleClick('decrement')}>Decrement</button>
      </div>
    </div>
  );
};

export default Counter;
