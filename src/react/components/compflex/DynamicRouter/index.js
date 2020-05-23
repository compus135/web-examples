import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Layout } from "antd";
import getFormatMenus from "./getFormatMenus";
import Routes from "./Routes";
import SiderMenu from "./SiderMenu";

const { Sider, Content } = Layout;
function DynamicRouter() {
  return (
    <BrowserRouter>
      <Layout>
        <Layout>
          <Sider className="App-sider">
            <SiderMenu menus={getFormatMenus()} />
          </Sider>

          <Content className="App-content" style={{ padding: "24px" }}>
            {Routes}
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
}

export default DynamicRouter;
