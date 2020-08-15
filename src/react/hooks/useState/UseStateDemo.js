import React, { useState } from "react";

const UseStateDemo = () => {
  const [count, setcount] = useState(() => {
    console.log(1);
    return 1;
  });
  return (
    <div>
      <div> {count}</div>
      <button onClick={() => setcount((preCount) => preCount + 1)}>
        increase
      </button>
    </div>
  );
};

export default UseStateDemo;
