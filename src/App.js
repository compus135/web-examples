import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import { Button, Layout, Menu, Breadcrumb } from "antd";
import "./App.css";
import Test from "./react/components/compflex/DynamicRouter";
import { routerConfig } from "./router";

const { Header, Sider, Content } = Layout;
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Header>
          <h2 className="App-title">WEB EXAMPLES</h2>
          <MainMenu routerConfig={routerConfig} />
        </Header>
        <Layout>
          <Sider className="App-sider">
            <SiderMenu routerConfig={routerConfig} />
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            {/* <Breadcrumb style={{ lineHeight: "56px" }}> f</Breadcrumb> */}
            <Content className="App-content">
              <Switch>
                <Route path="/" component={Test} />
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

const MainMenu = ({ routerConfig }) => {
  const renderMenuItems = routerConfig.map((item) => {
    return (
      <Menu.Item key={item.path}>
        <Link to={item.path}>{item.title}</Link>
      </Menu.Item>
    );
  });
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["react"]}>
      {renderMenuItems}
    </Menu>
  );
};

const SiderMenu = ({ routerConfig }) => {
  const renderMenuItem = (data) => {
    if (data.children && data.children.length > 0) {
      const renderChildrenItems = [];
      for (const child of data.children) {
        renderChildrenItems.push(renderMenuItem(child));
      }
      return (
        <Menu.SubMenu key={data.path} title={data.title}>
          {renderChildrenItems}
        </Menu.SubMenu>
      );
    } else {
      if (data.component) {
        return (
          <Menu.Item key={data.path} title={data.title}>
            {data.title}
          </Menu.Item>
        );
      } else {
        return <Menu.Item key={data.path}>{data.title}</Menu.Item>;
      }
    }
  };

  return (
    <Menu mode="inline" defaultSelectedKeys={["react"]}>
      {routerConfig.map((item) => renderMenuItem(item))}
    </Menu>
  );
};

export default App;
