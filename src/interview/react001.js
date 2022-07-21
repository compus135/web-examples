import React, { useState, useEffect } from "react";
// 1. 点击3次按钮会打印几次 123
// 2. 如何做到只打印一次 123
const About = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <button onClick={() => setcount(count + 1)}>{count}</button>
      <Comp arr={[1, 2]} />
    </div>
  );
};

const Comp = ({ arr }) => {
  useEffect(() => {
    console.log(123);
  }, [arr]);
  return <div>comp</div>;
};

export default About;
