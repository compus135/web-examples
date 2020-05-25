import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactHocExample01 from "./pages/ReactHocExample01";
import ReactHocExample02 from "./pages/ReactHocExample02";
import VueExample01 from "./pages/VueExample01";

const routes = {
  "/react/hoc/examples/example01": ReactHocExample01,
  "/react/hoc/examples/example02": ReactHocExample02,
  "/vue/example01": VueExample01,
};
function Routes() {
  return (
    <Switch>
      {Object.keys(routes).map((path) => {
        console.log(path);
        return <Route key={path} path={path} component={routes[path]} />;
      })}
    </Switch>
  );
}

export default Routes;
