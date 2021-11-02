import React, { useState } from "react";
import { Input } from "antd";

const FocusDemo = () => {
  const [value, setValue] = useState();
  const inputElement = (
    <Input
      onChange={(e) => {
        setValue(e.target.value);
      }}
    ></Input>
  );
  const renderInput = () => (
    <div>{value === "test" ? <span>{inputElement}</span> : inputElement}</div>
  );
  return <div>{renderInput()}</div>;
};

export default FocusDemo;
