import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

const SiderMenu = ({ menus, location: { pathname } }) => {
  const getSiderMenus = () => {
    const menu = menus.find((menu) => pathname.indexOf(menu.path) === 1);
    return menu.children || [];
  };
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
      {getSiderMenus().map((menu) => renderMenuItem(menu))}
    </Menu>
  );
};
export default withRouter(SiderMenu);
