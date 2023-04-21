import { registerMicroApps, start } from "qiankun";

registerMicroApps([
  {
    name: "react",
    entry: "//localhost:8000",
    container: "#subapp",
    activeRule: "/react",
    props: { key: 1, key2: 2 },
  },
  {
    name: "static",
    entry: "//localhost:5000",
    container: "#subapp",
    activeRule: "/static",
  },
]);

start({ sandbox: { experimentalStyleIsolation: true } });
