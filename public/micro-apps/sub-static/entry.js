function render(props) {
  const { container } = props;
  const rootEle = container
    ? container.querySelector("#root")
    : document.getElementById("root");
  rootEle.innerHTML = `<div>this is static page</div>`;
}
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

window.subStatic = {
  bootstrap: async () => {
    console.log("bootstrap");
  },
  mount: async (props) => {
    console.log("mount");
    render(props);
  },
  unmount: async () => {
    console.log("mount");
  },
};
