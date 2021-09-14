import React from 'react';

const Toggle = () => {
  const [show, toggleShow] = React.useState(true);
  return (
    <div>
      <button onClick={() => toggleShow(!show)}>
        Toggle: {show ? 'Show' : 'Hide'}
      </button>
      {show && <h2>Hello World</h2>}
    </div>
  );
};

export default Toggle;
