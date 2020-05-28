import React from "react";
import { Route } from "react-router-dom";
import DynamicRouter from "./react/components/compflex/DynamicRouter/index";
const menus = [
  {
    path: "react",
    title: "react",
    children: [
      {
        path: "components",
        title: "组件",
        children: [
          {
            path: "compflex",
            title: "复杂组件",
            children: [
              {
                path: "dynamicRouter",
                title: "动态路由",
                component: DynamicRouter,
              },
            ],
          },
        ],
      },
      {
        path: "hoc",
        title: "高阶组件",
        children: [
          {
            path: "subscribe",
            title: "mouse",
            children: [
              { path: "demo1", title: "demo1例子" },
              { path: "demo12", title: "demo12" },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "js",
    title: "js",
    children: [
      { path: "demo1", title: "demo1例子" },
      { path: "demo12", title: "demo12" },
    ],
  },
];

const getMenusWithUrl = (menus) => {
  /**
   * 根据树状结构的menu数据，叶子节点添加url
   * url由祖先节点的path和当前节点的path组成
   * @param {*} parentPath 父节点的路径
   * @param {*} menu 树状结构的数据
   */
  const addUrlForMenu = (parentPath, menu) => {
    let path = menu.path;
    if (menu.children) {
      for (const child of menu.children) {
        addUrlForMenu(parentPath + "/" + path, child);
      }
    } else {
      menu.url = parentPath + "/" + path;
    }
  };

  for (const menu of menus) {
    addUrlForMenu("", menu);
  }
  return menus;
};

const getRenderRoutes = (menus) => {
  const renderRoutes = [];
  const visitMenuComponents = (menu) => {
    if (menu.children && menu.children.length) {
      for (const subMenu of menu.children) {
        visitMenuComponents(subMenu);
      }
    } else {
      if (menu.component) {
        renderRoutes.push(
          <Route key={menu.url} path={menu.url} component={menu.component} />
        );
      }
    }
  };
  for (const menu of menus) {
    visitMenuComponents(menu);
  }
  console.log(renderRoutes);
  return renderRoutes;
};

export { menus, getMenusWithUrl, getRenderRoutes };
