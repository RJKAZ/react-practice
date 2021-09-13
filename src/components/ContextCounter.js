import React, { useState } from 'react';
import Counter2 from './Counter2';

const ContextCounter = () => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <ContextCounter.Provider value={{ count, increase, decrease }}>
        <Counter2 />
      </ContextCounter.Provider>
    </div>
  );
};

export default ContextCounter;
