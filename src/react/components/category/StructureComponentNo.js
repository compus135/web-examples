import React from "react";
import { Button, Checkbox, Avatar } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import "./StructureComponent.less";

class StructureComponentNo extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>reset</button>
        <div className="page-header">
          <span className="page-header-title">title</span>
          <span className="page-header-extra">
            <Button>btn1</Button>
            <Button>btn2</Button>
          </span>
        </div>
        <div className="page-header">
          <span className="page-header-title">
            <Avatar icon={<UserAddOutlined />} />
          </span>
          <span className="page-header-extra">
            <Checkbox>demo1</Checkbox>
          </span>
        </div>
      </div>
    );
  }
}

export default StructureComponentNo;
