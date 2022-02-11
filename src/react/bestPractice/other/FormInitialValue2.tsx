import { Form, Input, Select } from "antd";
import React, { useEffect } from "react";

// 根据currentSex进行条件渲染，挂载时currentSex === props.sex，更新时 currentSex = getFieldValue("sex")
// 使用isMount变量区分是否已挂载
const Test = (props: any) => {
  const { sex, money, face } = props;
  const { getFieldValue, getFieldDecorator, setFieldsValue } = props.form;
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
  }, []);

  const currentSex = isMount ? getFieldValue("sex") : sex;
  useEffect(() => {
    setFieldsValue({ sex: "male" });
  }, [setFieldsValue]);
  return (
    <div>
      {getFieldDecorator("sex", { initialValue: sex })(
        <Select>
          <Select.Option value="male">male</Select.Option>
          <Select.Option value="female">female</Select.Option>
        </Select>
      )}
      {currentSex === "male"
        ? getFieldDecorator("money", { initialValue: money })(
            <Input placeholder="money"></Input>
          )
        : getFieldDecorator("face", { initialValue: face })(
            <Input placeholder="face"></Input>
          )}
    </div>
  );
};

export default Form.create()(Test);
