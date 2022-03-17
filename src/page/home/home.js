import React, { useEffect, useState } from "react";
import "./home.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { useHistory, useLocation } from "react-router";

import { Layout, Menu } from "antd";
import UserProfileModule from "../userProfileModule";
import BookTicket from "../bookTicket";
import TransactionHistory from "../transactionHistory";
import About from "../about";
import { ChangePassModal, LogOutModal } from "../../components/modal";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  const [changePassVisible, setChangePassVisible] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("");

  const history = useHistory();

  const location = useLocation();

  const { pathname } = location;

  // console.log(pathname);

  useEffect(() => {
    if (pathname === "/book-ticket") setHeaderTitle("Booking List");
    if (pathname === "/profile") setHeaderTitle("Profile");
    if (pathname === "/transactions") setHeaderTitle("Transactions");
    if (pathname === "/about") setHeaderTitle("About");
  }, [pathname]);

  return (
    <>
      <Layout className="home-page-container">
        <Header
          setChangePassVisible={() => setChangePassVisible(true)}
          setLogOutVisible={() => setLogOutVisible(true)}
          headerTitle={headerTitle}
        />
        <Layout className="home-body">
          <Sider width={210} className="home-sider">
            <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
              <Menu.Item
                key={"/book-ticket"}
                onClick={() => history.push("/")}
                style={{ margin: 0, height: 50 }}
              >
                Book Ticket
              </Menu.Item>
              <Menu.Item
                key={"/transactions"}
                onClick={() => history.push("/transactions")}
                style={{ margin: 0, height: 50 }}
              >
                Transaction History
              </Menu.Item>
              <Menu.Item
                key={"/about"}
                onClick={() => history.push("/about")}
                style={{ margin: 0, height: 50 }}
              >
                About
              </Menu.Item>
            </Menu>
          </Sider>

          <Layout className="home-content">
            <Content>
              <Switch>
                <Route path="/book-ticket">
                  <BookTicket />
                </Route>
                <Route path="/profile">
                  <UserProfileModule />
                </Route>
                <Route path="/transactions">
                  <TransactionHistory />
                </Route>
                <Route path="/about">
                  <About />
                </Route>

                <Redirect from="/" to="/book-ticket" />
              </Switch>
            </Content>
          </Layout>
        </Layout>

        <ChangePassModal
          visible={changePassVisible}
          handleCancel={() => setChangePassVisible(false)}
          handleOk={() => setChangePassVisible(false)}
        />
        <LogOutModal
          visible={logOutVisible}
          handleCancel={() => setLogOutVisible(false)}
          handleOk={() => setLogOutVisible(false)}
          history={history}
        />
      </Layout>
    </>
  );
}

export default Home;
