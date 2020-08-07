import React, { useState, useEffect } from "react";

const useFriendStatus = () => {
  const [isOnLine, setisOnLine] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setisOnLine(true);
    }, 3000);
  }, []);
  return isOnLine;
};

const UseFriendStatusDemo = () => {
  const isOnLine = useFriendStatus();
  return <div>{isOnLine ? "online" : "not online"}</div>;
};
export default UseFriendStatusDemo;
