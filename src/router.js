import React from "react";
import { Route } from "react-router-dom";
import DynamicRouter from "./react/components/compflex/DynamicRouter/index";
import Memoization from "./react/apiReference/component/getDerivedStateFromProps/Memoization";
import ReComputeInRender from "./react/bestPractice/state/recomputeData/ReComputeInRender";
import ReComputeInRenderUseMemoize from "./react/bestPractice/state/recomputeData/ReComputeInRenderUseMemoization";
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
        path: "apiReference",
        title: "API REFERENCE",
        children: [
          {
            path: "component",
            title: "component",
            children: [
              {
                path: "getDerivedStateFromProps",
                title: "getDerivedStateFromProps",
                component: Memoization,
              },
            ],
          },
        ],
      },
      {
        path: "bestPractice",
        title: "最佳实践",
        children: [
          {
            path: "state",
            title: "state设计",
            children: [
              {
                path: "recomputeData",
                title: "重新计算数据当prop改变",

                children: [
                  {
                    path: "recomputeData",
                    title: "In Render",
                    component: ReComputeInRender,
                  },
                  {
                    path: "recomputeDataUseMemoize",
                    title: "Use Memoize",
                    component: ReComputeInRenderUseMemoize,
                  },
                ],
              },
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

  return renderRoutes;
};

export { menus, getMenusWithUrl, getRenderRoutes };
