import React, { useState, useEffect, useCallback } from "react";

function Test() {
  const [count, setCount] = useState(0);
  const handleFocus = () => {
    console.log(count);
  };
  const countWatcher = useCallback((count) => setCount(count), [setCount]);
  return (
    <div>
      <Child countWatcher={countWatcher}></Child>
      <button onClick={handleFocus}>focus</button>
    </div>
  );
}

const Child = function (props) {
  const { countWatcher } = props;
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount((preCount) => preCount + 1);
  };
  useEffect(() => {
    countWatcher(count);
  }, [countWatcher, count]);
  return (
    <div>
      {count}
      <button onClick={handleClick}>INCREASE</button>
    </div>
  );
};

export default Test;
