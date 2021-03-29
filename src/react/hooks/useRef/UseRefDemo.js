import React, { useRef } from "react";
/**
  1. 每次渲染都返回同一个对象
  2. ref对象的current属性变更不会触发组件重新渲染
  3. current属性类似于class组件的实例变量，应该在effects中或事件处理程序中修改current属性
 */
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
