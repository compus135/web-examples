import React from "react";
import { Route, Switch } from "react-router-dom";
import ReactHocExample01 from "./pages/ReactHocExample01";
import ReactHocExample02 from "./pages/ReactHocExample02";
import VueExample01 from "./pages/VueExample01";

const pathComponent = {
  "react/hoc/examples/example01": ReactHocExample01,
  "react/hoc/examples/example02": ReactHocExample02,
  "vue/example01": VueExample01,
};
function Routes() {
  return (
    <Switch>
      {pathComponent.keys.map((path) => (
        <Route path={path} component={pathComponent[path]} />
      ))}
    </Switch>
  );
}

export default Routes;
