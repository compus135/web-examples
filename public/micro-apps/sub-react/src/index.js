import React from "react";
import "./public-path";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

function render(props) {
  const { container } = props;
  const root = ReactDOM.createRoot(
    container
      ? container.querySelector("#root")
      : document.getElementById("root")
  );
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap(props) {
  console.log("bootstrap", props);
}
export async function mount(props) {
  console.log("mount", props);
  render(props);
}
export async function unmount(props) {
  console.log("unmount", props);
}
