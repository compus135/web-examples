import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const request = () => {
  console.log("request");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(false);
    }, 1000);
  });
};

const MemoryLeakTest = () => {
  useEffect(() => {
    let timer;
    async function fn() {
      const r = await request();
      if (!r) {
        timer = setTimeout(() => {
          fn();
        }, 100);
      }
    }
    fn();
    return () => {
      window.clearTimeout(timer);
    };
  });
  return (
    <div>
       <Link to="/react">link</Link>
    </div>
  );
};

export default MemoryLeakTest;
