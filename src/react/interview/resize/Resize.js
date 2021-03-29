import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

// 使用hooks组件，监听resize事件并打印resize次数
/**
  1. 注册/移除事件监听器
  2. 卸载时要移除事件监听器避免内存泄漏
  3. useEffect写法
  4. useState写法
  5. 事件处理程序在useEffect外面定义使用useCallback
  6. 防抖机制
 */
const myDebounce = (fn, delay) => {
  let timer;
  return function (...args) {
    if (timer) {
      window.clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  };
};

const Resize = () => {
  const [count, setcount] = useState(0);
  const listener = useCallback(
    myDebounce((e) => {
      setcount((preCount) => preCount + 1);
    }, 200),
    []
  );
  useEffect(() => {
    window.addEventListener("resize", listener);
    return () => {
      window.removeEventListener("resize", listener);
    };
  }, [listener]);
  useEffect(() => {
    console.log(count);
  }, [count]);
  return (
    <div>
      <Link to="/react">link</Link>
    </div>
  );
};

export default Resize;
