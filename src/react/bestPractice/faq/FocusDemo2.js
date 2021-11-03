import React, { useState } from "react";
import { Input } from "antd";
// Input suffix 条件渲染时光标丢失
// 光标丢失原因，组件重新渲染时渲染了一个新的Input
// 解决方案：不渲染时 suffix 使用 <span />
const Test = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <Input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        suffix={value === "test" ? "rmb" : ""}
        // suffix={value === "test" ? "rmb" : <span />}
      />
    </div>
  );
};

export default Test;
