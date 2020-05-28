import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { withRouter } from "react-router";
import { getMainMenuPath } from "./appHelper";

const MainMenu = ({ menus, location: { pathname } }) => {
  const getSelectedKeys = () => {
    return [getMainMenuPath(pathname)];
  };
  const renderMenuItems = menus.map((menu) => {
    return (
      <Menu.Item key={menu.path}>
        <Link to={`/${menu.path}`}>{menu.title}</Link>
      </Menu.Item>
    );
  });

  return (
    <Menu theme="dark" mode="horizontal" selectedKeys={getSelectedKeys()}>
      {renderMenuItems}
    </Menu>
  );
};

export default withRouter(MainMenu);
