import React, { useState, useCallback } from "react";
function Example01() {
  const [count, setCount] = useState(0);
  const memorizedCallback = useCallback(() => {
    console.log(count);
  }, [count]);
  memorizedCallback();
  return (
    <div>
      <button onClick={() => setCount((preState) => preState + 1)}>
        increase
      </button>
    </div>
  );
}

export default Example01;
