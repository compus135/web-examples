import React, { useLayoutEffect, useState } from "react";

const UseLayoutEffectDemo = () => {
  const [count, setcount] = useState(0);
  useLayoutEffect(() => {
    console.log("useLayoutEffect");
  });
  return (
    <div>
      {count}
      <button
        onClick={() => {
          setcount((preCount) => preCount + 1);
        }}
      >
        increase
      </button>
    </div>
  );
};

export default UseLayoutEffectDemo;
