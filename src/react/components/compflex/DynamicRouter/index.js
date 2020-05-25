import React from "react";
import { Layout } from "antd";
import getFormatMenus from "./getFormatMenus";
import Routes from "./Routes";
import SiderMenu from "./SiderMenu";

const { Sider, Content } = Layout;
function DynamicRouter() {
  return (
    <Layout style={{ minHeight: 200 }}>
      <Layout>
        <Sider>
          <SiderMenu menus={getFormatMenus()} />
        </Sider>

        <Content>
          <Routes />
        </Content>
      </Layout>
    </Layout>
  );
}

export default DynamicRouter;
