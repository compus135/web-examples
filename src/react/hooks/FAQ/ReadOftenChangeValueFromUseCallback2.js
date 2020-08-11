import React, { useState, useCallback, useRef, useEffect } from "react";

const useCustom = (text) => {
  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
  });
  const handleSubmit = useCallback(() => {
    alert(textRef.current);
  }, [textRef]);
  return handleSubmit;
};

const ReadOftenChangeValueFromUseCallback = () => {
  const [text, settext] = useState("");
  const handleSubmit = useCustom(text);
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
