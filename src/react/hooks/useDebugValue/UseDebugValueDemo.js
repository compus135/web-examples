import React, { useState, useEffect, useDebugValue } from "react";

const useFriendStatus = () => {
  const [isOnLine, setisOnLine] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisOnLine(true);
    }, 3000);
  }, []);
  useDebugValue(isOnLine ? "online" : "not online");
  return isOnLine;
};

const UseDebugValueDemo = () => {
  const isOnLine = useFriendStatus();
  return <div>{isOnLine ? "online" : "not online"}</div>;
};
export default UseDebugValueDemo;
