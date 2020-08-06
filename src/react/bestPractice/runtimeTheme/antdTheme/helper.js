import React from "react";
import "./Test.less";
const antdLess = {
  //antd变量，重置浏览器默认样式，anticon， ant-motion-collapse样式
  "lib/style/index.less": {
    // antd变量，等同于"default"
    "themes/index": {
      //antd变量，组件使用这里的变量
      "default.less": {
        "color/colors": {
          //颜色变量 eg:blue
          colorPalette: {
            //less 插件
            bezierEasing: {}, //less 插件
            tinyColor: {}, //less 插件
          },
        },
      },
    },
    // mixin,重置浏览器默认样式，anticon， ant-motion-collapse样式
    "core/index": {
      // mixin
      "mixins/index": {
        size: {}, //mixin width
        compatibility: {}, //
        clearfix: {}, //
        iconfont: {}, //
        motion: {}, //
        reset: {}, //
        "operation-unit": {}, //
        typography: {}, //
        customize: {}, // 自定义暗黑主题时的mixin
      },
      base: {}, //覆盖浏览器默认样式
      iconfont: {}, // anticon 样式
      motion: {}, // .ant-motion-collapse
    },
  },
  "lib/style/components.less": {},
};

const antdDark = {
  "lib/style/dark.less": {
    "themes/dark.less": {
      "default.less": {},
    },
    "core/index": {},
  },
  "lib/style/components.less": {},
};

const AntdThemeDemo = () => {
  return <button className="rt-button">{this.props.children}</button>;
};

export default AntdThemeDemo;
