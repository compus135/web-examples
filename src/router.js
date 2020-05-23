import Test from "./react/test/Test";

const routerConfig = [
  {
    path: "react",
    title: "react",
    children: [
      {
        path: "hoc",
        title: "高阶组件",
        children: [
          {
            path: "subscribe",
            title: "mouse",
            children: [
              { path: "demo1", title: "demo1例子", component: Test },
              { path: "demo12", title: "demo12", component: Test },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "js",
    title: "js",
  },
];

const mapRouteComponent = (data) => {
  for (const iterator of routerConfig) {
  }
};

export { routerConfig };
