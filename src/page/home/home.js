import React from "react";
import "./home.css";
import { Switch, Route, Redirect } from "react-router-dom";

import Header from "../../components/Header";
import { Layout, Menu } from "antd";
import UserProfileModule from "../userProfileModule";
import BookTicket from "../bookTicket/bookTicket";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  return (
    <Layout className="home-page-container">
      <Header />
      <Layout className="home-body">
        <Sider width={210} className="home-sider">
          <Menu>
            <Menu.Item key={"book-ticket"} style={{ background: "red" }}>
              Book Ticket
            </Menu.Item>
            <Menu.Item key={"transaction-history"}>
              Transaction History
            </Menu.Item>
          </Menu>
        </Sider>

        <Layout className="home-content">
          <Content>
            <Switch>
              <Route path="/profile">
                <UserProfileModule />
              </Route>
              <Route path="/book-ticket">
                <BookTicket />
              </Route>

              <Redirect from="/" to="/book-ticket" />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
