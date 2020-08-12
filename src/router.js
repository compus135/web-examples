import React from "react";
import { Route } from "react-router-dom";
import ForwardingRefsDemo from "./react/advancedGuides/forwardingRefs/ForwardingRefsDemo";

import DynamicRouter from "./react/components/compflex/DynamicRouter/index";
//import Memoization from "./react/apiReference/component/getDerivedStateFromProps/Memoization";
import ReComputeInRender from "./react/bestPractice/state/recomputeData/ReComputeInRender";
import ReComputeInRenderUseMemoize from "./react/bestPractice/state/recomputeData/ReComputeInRenderUseMemoization";
import AsyncComponentDidMount from "./react/apiReference/component/componentDidMount/Async";
import Test from "./test/Test";
import UnControlledComponentWithKeyAsync from "./react/bestPractice/state/resetStateWhenPropChange/UnControlledComponentWithKeyAsync";
import UnControlledComponentWithKey from "./react/bestPractice/state/resetStateWhenPropChange/UnControlledComponentWithKey";
import FullyControlledComponent from "./react/bestPractice/state/resetStateWhenPropChange/FullyControlledComponent";
import InComponentWillReceiveProps from "./react/bestPractice/state/fetchExternalDataWhenPropChange/InComponentWillReceiveProps";
import InComponentDidUpdate from "./react/bestPractice/state/fetchExternalDataWhenPropChange/InComponentDidUpdate";
import InGetDerivedStateFromProps from "./react/bestPractice/state/fetchExternalDataWhenPropChange/InGetDerivedStateFromProps";
import SwitchClass from "./react/bestPractice/runtimeTheme/switchClass";
import UserReducerDemo from "./react/hooks/useReducer/UserReducerDemo2";
import UseCallbackDemo from "./react/hooks/useCallback/UseCallbackDemo";
import UseMemoDemo from "./react/hooks/useMemo/UseMemoDemo";
import UseRefDemo from "./react/hooks/useRef/UseRefDemo";
import UseContextDemo from "./react/hooks/useContext/UseContextDemo2";
import AntdThemeDemo from "./react/bestPractice/runtimeTheme/antdTheme/AntdThemeDemo";
import UseImperativeHandleDemo from "./react/hooks/useImperativeHandle/UseImperativeHandleDemo";
import UseLayoutEffectDemo from "./react/hooks/useLayoutEffect/UseLayoutEffectDemo";
import UseFriendStatusDemo from "./react/hooks/useCustomHook/UseFriendStatusDemo";
import UseDebugValueDemo from "./react/hooks/useDebugValue/UseDebugValueDemo";
import ReadOftenChangeValueFromUseCallback2 from "./react/hooks/FAQ/ReadOftenChangeValueFromUseCallback3";
import AvoidPassCallbackDown from "./react/hooks/FAQ/AvoidPassCallbackDown";
import ModalDemo from "./react/antd/modal/ModalDemo";
import ModalDemo2 from "./react/antd/modal/ModalDemo2";
import GridsDemo from "./react/antd/layout/grids/GridsDemo";
const menus = [
  {
    path: "react",
    title: "react",

    children: [
      {
        path: "advancedGuides",
        title: "advancedGuides",
        children: [
          {
            path: "forwardingRefs",
            title: "forwardingRefs",
            component: ForwardingRefsDemo,
          },
        ],
      },
      {
        path: "antd",
        title: "antd",
        children: [
          {
            path: "layout",
            title: "layout",
            children: [
              {
                path: "grids",
                title: "grids",
                component: GridsDemo,
              },
            ],
          },
          {
            path: "modal",
            title: "modal",
            children: [
              {
                path: "ModalDemo",
                title: "ModalDemo",
                component: ModalDemo,
              },
              {
                path: "ModalDemo2",
                title: "ModalDemo2",
                component: ModalDemo2,
              },
            ],
          },
        ],
      },
      {
        path: "hooks",
        title: "hooks",
        children: [
          {
            path: "faq",
            title: "FAQ",
            children: [
              {
                path: "avoidPassCallbackDown",
                title: "避免向下传递回调",
                component: AvoidPassCallbackDown,
              },
              {
                path: "readOftenChangeValueFromUseCallback2",
                title: "readOftenChangeValueFromUseCallback2",
                component: ReadOftenChangeValueFromUseCallback2,
              },
            ],
          },
          {
            path: "useDebugValue",
            title: "useDebugValue",
            component: UseDebugValueDemo,
          },
          {
            path: "useCustomHook",
            title: "useCustomHook",
            component: UseFriendStatusDemo,
          },
          {
            path: "useReducer",
            title: "useReducer",
            component: UserReducerDemo,
          },
          {
            path: "useLayoutEffect",
            title: "useLayoutEffect",
            component: UseLayoutEffectDemo,
          },
          {
            path: "useImperativeHandle",
            title: "useImperativeHandle",
            component: UseImperativeHandleDemo,
          },

          {
            path: "useContext",
            title: "useContext",
            component: UseContextDemo,
          },
          {
            path: "useCallback",
            title: "useCallback",
            component: UseCallbackDemo,
          },
          {
            path: "useMemo",
            title: "useMemo",
            component: UseMemoDemo,
          },
          {
            path: "useRef",
            title: "useRef",
            component: UseRefDemo,
          },
        ],
      },
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
              {
                path: "resetStateWhenPropChange",
                title: "prop改变重置state",

                children: [
                  {
                    path: "unControlledComponentWithKey",
                    title: "有key的非可控组件",
                    component: UnControlledComponentWithKey,
                  },
                  {
                    path: "unControlledComponentWithKeyAsync",
                    title: "有key的非可控组件异步获取数据",
                    component: UnControlledComponentWithKeyAsync,
                  },
                  {
                    path: "fullyControlledComponent",
                    title: "完全受控组件",
                    component: FullyControlledComponent,
                  },
                ],
              },
              {
                path: "fetchExternalDataWhenPropChange",
                title: "获取外部数据当prop改变",
                children: [
                  {
                    path: "InComponentWillReceiveProps",
                    title: "在ComponentWillReceiveProps中获取数据",
                    component: InComponentWillReceiveProps,
                  },
                  {
                    path: "InComponentDidUpdate",
                    title: "在ComponentDidUpdate中获取数据",
                    component: InComponentDidUpdate,
                  },
                  {
                    path: "InGetDerivedStateFromProps",
                    title: "在GetDerivedStateFromProps中获取数据",
                    component: InGetDerivedStateFromProps,
                  },
                ],
              },
            ],
          },
          {
            path: "runtimeTheme",
            title: "动态主题",
            children: [
              {
                path: "switchClass",
                title: "切换class",
                component: SwitchClass,
              },
              {
                path: "loadThemeCss",
                title: "加载css文件",
                href: "index.html",
              },
              {
                path: "antdTheme",
                title: "自定义主题",
                component: AntdThemeDemo,
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
    component: Test,
  },
  {
    path: "css",
    title: "css",

    children: [
      {
        path: "float",
        title: "float",
        href: "index.html",
      },
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
