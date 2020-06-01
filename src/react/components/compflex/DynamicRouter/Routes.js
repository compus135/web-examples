import React from "react";
import { Route, Switch } from "react-router-dom";
import routes from "./routerConfig";

function Routes({ menus }) {
  const getValidPages = (menus) => {
    const pages = [];
    const visitMenu = (menu) => {
      if (menu.children) {
        for (const child of menu.children) {
          visitMenu(child);
        }
      } else {
        pages.push(menu.page);
      }
    };
    for (const menu of menus) {
      visitMenu(menu);
    }
    return pages;
  };
  const validPages = getValidPages(menus);
  const filterRoutes = {};
  for (const page of Object.keys(routes)) {
    if (validPages.includes(page)) filterRoutes[page] = routes[page];
  }

  return (
    <Switch>
      {Object.keys(filterRoutes).map((page) => {
        return (
          <Route
            key={page}
            path={routes[page].path}
            component={routes[page].component}
          />
        );
      })}
    </Switch>
  );
}

export default Routes;
