import React, { useState, useCallback, useRef, useEffect } from "react";

const useEventCallback = (fn) => {
  const textRef = useRef();
  useEffect(() => {
    textRef.current = fn;
  });
  const handleSubmit = useCallback(() => textRef.current(), [textRef]);
  console.log("handleSubmit");
  console.log(handleSubmit);
  return handleSubmit;
};

const ReadOftenChangeValueFromUseCallback = () => {
  const [text, settext] = useState("");
  const handleSubmit = useEventCallback(() => {
    alert(text);
  });
  return (
    <div>
      <input
        value={text}
        onChange={(e) => {
          settext(e.target.value);
        }}
      ></input>
      <ExpensiveComponent onSubmit={handleSubmit} />
    </div>
  );
};

const ExpensiveComponent = React.memo((props) => {
  console.log("ExpensiveComponent");
  return (
    <div>
      <button onClick={props.onSubmit}>submit</button>
    </div>
  );
});

export default ReadOftenChangeValueFromUseCallback;
