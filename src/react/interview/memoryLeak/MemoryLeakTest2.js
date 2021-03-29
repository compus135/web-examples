import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
/**
  实现以下功能：请求一个接口，失败则等待1秒然后继续访问直至成功为止。
  1. 异步请求
  2. 递归
  3. 避免内存泄漏
  4. useRef, useEffect
 */
const request = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false);
    }, 1000);
  });
};

const MemoryLeakTest2 = () => {
  const unmountRef = useRef(false);

  useEffect(() => {
    let timer;
    async function fn() {
      console.log("request");
      const r = await request();
      if (!r && !unmountRef.current) {
        timer = setTimeout(() => {
          fn();
        }, 100);
      }
    }
    fn();
    return () => {
      window.clearTimeout(timer);
      unmountRef.current = true;
    };
  });
  return (
    <div>
       <Link to="/react">link</Link>
    </div>
  );
};

export default MemoryLeakTest2;
