import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Layout, Breadcrumb } from "antd";
import "./index.css";
import { menus, getMenusWithUrl } from "../router";
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
          <Sider className="App-sider">
            <SiderMenu menus={menusWithUrl} />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <Breadcrumb style={{ lineHeight: "56px" }}> f</Breadcrumb>
            <Content className="App-content">
              <Switch>
                <Route path="/" component={() => "test"} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
