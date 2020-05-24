import React from "react";
import { Layout } from "antd";
import getFormatMenus from "./getFormatMenus";
import Routes from "./Routes";
import SiderMenu from "./SiderMenu";

const { Sider, Content } = Layout;
function DynamicRouter() {
  return (
    <Layout>
      <Layout>
        <Sider className="App-sider">
          <SiderMenu menus={getFormatMenus()} />
        </Sider>

        <Content className="App-content" style={{ padding: "24px" }}>
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default DynamicRouter;
