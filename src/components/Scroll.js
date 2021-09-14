import React, { useState, useRef } from 'react';

const Scroll = () => {
  const prevScrolly = useRef(0);
  const [goingUp, setGoingUp] = useState(false);

  const onScroll = (e) => {
    const currentScrolly = e.target.scrollTop;
    if (prevScrolly.current < currentScrolly && goingUp) {
      setGoingUp(false);
    }
    if (prevScrolly.current > currentScrolly && !goingUp) {
      setGoingUp(true);
    }
    prevScrolly.current = currentScrolly;
    console.log(goingUp, currentScrolly);
  };

  return (
    <div onScroll={onScroll} style={{ height: 300, overflowY: 'scroll' }}>
      {Array(50)
        .fill('Get the scroll position onScroll in react.')
        .map((f, i) => {
          return <p key={i}>{f}</p>;
        })}
    </div>
  );
};

export default Scroll;
