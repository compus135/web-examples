import React from "react";
import { Button, Checkbox, Avatar } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import "./StructureComponent.less";

class StructureComponent extends React.Component {
  state = { flag: 0 };
  handleClick = () => {
    this.setState((preState) => ({ flag: !preState.flag }));
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>reset</button>
        <PageHeader
          title="title"
          exra={[<Button>btn1</Button>, <Button>btn2</Button>]}
        />
        <PageHeader
          title={<Avatar icon={<UserAddOutlined />} />}
          exra={<Checkbox>demo1</Checkbox>}
        />
      </div>
    );
  }
}

class PageHeader extends React.Component {
  render() {
    const { title, exra } = this.props;
    return (
      <div className="page-header">
        <span className="page-header-title">{title}</span>
        <span className="page-header-extra">{exra}</span>
      </div>
    );
  }
}

export default StructureComponent;
