import React, { useRef } from "react";

const App = () => {
  const ref = useRef(null);
  //当需要时调用 getObserver()
  const getObserver = () => {
    if (ref.current === null) {
      ref.current = new Object(); // 此处代表昂贵开销的对象
    }
    return ref.current;
  };
  return <div />;
};

export default App;
