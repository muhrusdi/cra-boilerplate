import React from "react";
import { Sidebar } from "components/sidebars";
import { Layout } from "antd";
import { Container, Header } from "components";

const { Content } = Layout;

const LayoutWrap = ({ children }) => (
  <>
    <Layout style={{ background: "#fff" }}>
      <Header />
      <Content style={{ padding: "50px" }}>
        <Layout style={{ background: "#fff" }}>
          <Sidebar />
          <Container style={{ width: "100%", maxWidth: 992 }}>
            <Content style={{ padding: "24px", minHeight: 280 }}>{children}</Content>
          </Container>
        </Layout>
      </Content>
    </Layout>
  </>
);

export default LayoutWrap;
