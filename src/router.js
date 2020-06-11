import React from "react";
import { Route } from "react-router-dom";
import DynamicRouter from "./react/components/compflex/DynamicRouter/index";
//import Memoization from "./react/apiReference/component/getDerivedStateFromProps/Memoization";
import ReComputeInRender from "./react/bestPractice/state/recomputeData/ReComputeInRender";
import ReComputeInRenderUseMemoize from "./react/bestPractice/state/recomputeData/ReComputeInRenderUseMemoization";
import AsyncComponentDidMount from "./react/apiReference/component/componentDidMount/Async";
import HocTest from "./test/hoc/Test";
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
                path: "componentDidMount",
                title: "componentDidMount",
                component: AsyncComponentDidMount,
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
    path: "test",
    title: "临时测试代码",
    children: [{ path: "hoc", title: "hoc例子", component: HocTest }],
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
