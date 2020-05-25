const getFormatMenus = () => {
  const menus = [
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

export default getFormatMenus;
