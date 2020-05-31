import React from "react";
import { Layout } from "antd";
import menus from "./fakeMenus";
import Routes from "./Routes";
import SiderMenu from "./SiderMenu";

const { Sider, Content } = Layout;
function DynamicRouter() {
  return (
    <Layout style={{ minHeight: 500 }}>
      <Layout>
        <Sider>
          <SiderMenu menus={menus} />
        </Sider>

        <Content>
          <Routes menus={menus} />
        </Content>
      </Layout>
    </Layout>
  );
}

export default DynamicRouter;
