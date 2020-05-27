import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const MainMenu = ({ menus, pathname }) => {
  const defaultSelectedKeys = () => {};
  const renderMenuItems = menus.map((menu) => {
    return (
      <Menu.Item key={menu.path}>
        <Link to={`/${menu.path}`}>{menu.title}</Link>
      </Menu.Item>
    );
  });
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["react"]}>
      {renderMenuItems}
    </Menu>
  );
};

export default MainMenu;
