import React from "react";
import { BrowserRouter, Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import "./index.css";
import { menus, getMenusWithUrl, getRenderRoutes } from "../router";
import MainMenu from "./MainMenu";
import SiderMenu from "./SiderMenu";

const { Header, Sider, Content } = Layout;
function App() {
  const menusWithUrl = getMenusWithUrl(menus);
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <h2 className="App-title">WEB EXAMPLES</h2>
          <MainMenu menus={menusWithUrl} />
        </Header>
        <Layout>
          <Sider width={360} className="App-sider">
            <SiderMenu menus={menusWithUrl} />
          </Sider>
          <Layout>
            <Content className="App-content">
              <Switch>
                <Redirect exact from="/" to="/react"></Redirect>
                {getRenderRoutes(menus)}
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
