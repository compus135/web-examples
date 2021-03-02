import React, { useImperativeHandle, useRef, useState } from "react";

function Test() {
  const childRef = useRef(null);
  const handleFocus = () => {
    console.log(childRef.current.count);
  };
  return (
    <div>
      <Child ref={childRef}></Child>
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}

const Child = React.forwardRef(function (props, ref) {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((preCount) => preCount + 1);
  };
  useImperativeHandle(ref, () => ({
    count,
  }));
  return (
    <div>
      {count}
      <button onClick={handleClick}>INCREASE</button>
    </div>
  );
});

export default Test;
