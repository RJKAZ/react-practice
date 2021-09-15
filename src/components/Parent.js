import React, { forwardRef, useRef, useImperativeHandle } from 'react';

const ChildAlert = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({
    getMessage() {
      alert('Message from Child');
    },
  }));
  return <h1>Child Component </h1>;
});

const Parent = () => {
  const childRef = useRef();

  return (
    <div>
      <ChildAlert ref={childRef} />
      <button onClick={() => childRef.current.getMessage()}>Click</button>
    </div>
  );
};

export default Parent;
