import React from "react";
import "./AntdThemeDemo.less";
import { Switch, Slider, Select, DatePicker } from "antd";

const { Option } = Select;
const AntdThemeDemo = () => {
  return (
    <div>
      <Slider defaultValue={30}></Slider>
      <br></br>
      Disabled: <Switch />
      <br></br>
      <br></br>
      <Select defaultValue="lucy" style={{ width: 120 }}>
        <Option value="jack">Jack</Option>
        <Option value="lucy">Lucy</Option>
        <Option value="disabled" disabled>
          Disabled
        </Option>
        <Option value="Yiminghe">yiminghe</Option>
      </Select>
      <br></br>
      <br></br>
      <DatePicker />
    </div>
  );
};

export default AntdThemeDemo;
