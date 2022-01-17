import { Form, Input, Select } from "antd";
import React, { useEffect } from "react";

const Test = (props: any) => {
  const { getFieldValue, getFieldDecorator, setFieldsValue } = props.form;

  const sex = getFieldValue("sex");
  useEffect(() => {
    setFieldsValue({ sex: "male" });
  }, [setFieldsValue]);
  return (
    <div>
      {getFieldDecorator("sex")(
        <Select>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
      )}
      {sex === "male"
        ? getFieldDecorator("money")(<Input placeholder="money"></Input>)
        : getFieldDecorator("face")(<Input placeholder="face"></Input>)}
    </div>
  );
};

export default Form.create()(Test);
