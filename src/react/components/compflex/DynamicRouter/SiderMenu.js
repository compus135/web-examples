import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SiderMenu = ({ routerConfig }) => {
  const renderMenuItem = (data) => {
    if (data.children && data.children.length > 0) {
      const renderChildrenItems = [];
      for (const child of data.children) {
        renderChildrenItems.push(renderMenuItem(child));
      }
      return (
        <Menu.SubMenu key={data.path} title={data.title}>
          {renderChildrenItems}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={data.path}>
          <Link to={data.path}>{data.title}</Link>
        </Menu.Item>
      );
    }
  };

  return (
    <Menu mode="inline" defaultSelectedKeys={["react"]}>
      {routerConfig.map((item) => renderMenuItem(item))}
    </Menu>
  );
};
export default SiderMenu;
