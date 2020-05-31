import Hooks from "./pages/Hooks";
import Vue from "./pages/Vue";

const rootUrl = "/react/components/compflex/dynamicRouter";
const routes = {
  hooks: { path: `${rootUrl}/hooks`, component: Hooks },
  vue: { path: `${rootUrl}/vue`, component: Vue },
};

export default routes;
