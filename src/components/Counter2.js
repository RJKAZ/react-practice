import React, { useContext } from 'react';

const CountContext = React.createContext();

const Counter2 = () => {
  const { count, increase, decrease } = useContext(CountContext);

  return (
    <h2>
      <button onClick={decrease}>Decrement</button>
      <span className='count'>{count}</span>
      <button onClick={increase}>Increment</button>
    </h2>
  );
};

export default Counter2;
