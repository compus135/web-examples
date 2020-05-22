import React from "react";
import { Button, Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import logo from "./logo.svg";
import "./App.css";
import SubMenu from "antd/lib/menu/SubMenu";
const { Header, Sider, Content } = Layout;
function App() {
  return (
    <Layout>
      <Header>
        <h2 className="App-title">WEB EXAMPLES</h2>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["react"]}>
          <Menu.Item key="react">react</Menu.Item>
          <Menu.Item key="html">html</Menu.Item>
          <Menu.Item key="js">js</Menu.Item>
          <Menu.Item key="css">css</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider className="App-sider">
          <Menu
            mode="inline"
            defaultSelectedKeys={["js"]}
            defaultOpenKeys={["sub1"]}
          >
            <Menu.SubMenu key="sub1" icon={<UserOutlined />} title="hoc">
              <Menu.Item key="react">react</Menu.Item>
              <Menu.Item key="html">html</Menu.Item>
              <Menu.Item key="js">js</Menu.Item>
              <Menu.Item key="css">css</Menu.Item>
            </Menu.SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Breadcrumb style={{ lineHeight: "56px" }}> f</Breadcrumb>
          <Content className="App-content"></Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default App;
