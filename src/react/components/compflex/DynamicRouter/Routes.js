import React from "react";
import { Route, Switch } from "react-router-dom";
import Example01 from "./pages/Example01";

const pathComponent = {
  "react/hoc/examples/example01": Example01,
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
