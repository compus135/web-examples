import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { v4 as uuid } from "uuid";
import routes from "./routerConfig";

const SiderMenu = ({ menus }) => {
  const renderMenuItem = (menu) => {
    // console.log(menu);
    if (menu.children && menu.children.length > 0) {
      const renderChildrenItems = [];
      for (const child of menu.children) {
        renderChildrenItems.push(renderMenuItem(child));
      }
      return (
        <Menu.SubMenu key={uuid()} title={menu.title}>
          {renderChildrenItems}
        </Menu.SubMenu>
      );
    } else {
      return (
        <Menu.Item key={uuid()}>
          <Link to={routes[menu.page].path}>{menu.title}</Link>
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
