import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

const SiderMenu = ({ menus }) => {
  const renderMenuItem = (menu) => {
    if (menu.children && menu.children.length > 0) {
      const renderChildrenItems = [];
      for (const child of menu.children) {
        renderChildrenItems.push(renderMenuItem(child));
      }
      return (
        <Menu.SubMenu key={menu.path} title={menu.title}>
          {renderChildrenItems}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={menu.url}>
          <Link to={menu.url}>{menu.title}</Link>
        </Menu.Item>
      );
    }
  };

  return (
    <Menu mode="inline" defaultSelectedKeys={["react"]}>
      {menus.map((menu) => renderMenuItem(menu))}
    </Menu>
  );
};
export default SiderMenu;
