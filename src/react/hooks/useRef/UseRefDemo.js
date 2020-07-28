import React, { useRef } from "react";

function Example01() {
  const inputEl = useRef(null);
  return (
    <div>
      <button onClick={() => inputEl.current.focus()}>increase</button>
      <input ref={inputEl} />
    </div>
  );
}

export default Example01;
