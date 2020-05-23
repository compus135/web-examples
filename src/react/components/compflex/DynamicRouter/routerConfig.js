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
            path: "examples",
            title: "例子演示",
            children: [
              {
                path: "example01",
                title: "例子1",
              },
              {
                path: "example02",
                title: "例子2",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "vue",
    title: "vue",
    children: [
      { path: "example01", title: "例子1" },
      { path: "example02", title: "例子2" },
    ],
  },
];

export { routerConfig };
