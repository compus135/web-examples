import React, { useState, useCallback, useRef, useEffect } from "react";

const Test = () => {
  const [text, settext] = useState("");

  const textRef = useRef();
  useEffect(() => {
    textRef.current = text;
  });
  const handleSubmit = useCallback(() => {
    alert(textRef.current);
  }, [textRef]);
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

const Test1 = () => {
  const [text, settext] = useState("");
  const handleSubmit = () => {
    alert(text);
  };
  return (
    <div>
      <input value={text} onChange={(e) => settext(e.target.value)}></input>
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

export default Test;
