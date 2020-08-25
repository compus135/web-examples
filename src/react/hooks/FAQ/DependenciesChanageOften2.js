import React, { useState, useEffect } from "react";

const DependenciesChanageOften = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    const id = setInterval(() => {
      setcount((count) => count + 1);
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return <div>{count}</div>;
};

export default DependenciesChanageOften;
