import React from "react";
import "./home.css";

import Header from "../../components/Header";
import { Layout, Menu } from "antd";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  return (
    <Layout className="home-page-container">
      <Header />
      <Layout className="home-body">
        <Sider width={210} className="home-sider">
          <Menu>
            <Menu.Item style={{ background: "red" }}>Book Ticket</Menu.Item>
            <Menu.Item>Transaction History</Menu.Item>
          </Menu>
        </Sider>

        <Layout className="home-content">
          <Content></Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
