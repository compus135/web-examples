import React, { useState, useMemo } from "react";

function Example01() {
  const [count, setCount] = useState(0);
  const memorizedValue = useMemo(() => {
    //开销很大的计算
    return count;
  }, [count]);
  console.log(memorizedValue);
  return (
    <div>
      <button onClick={() => setCount((preState) => preState + 1)}>
        increase
      </button>
      <ExpensiveComp value={memorizedValue} />
    </div>
  );
}

function ExpensiveComp() {
  return <div>ExpensiveComp...</div>;
}

export default Example01;
