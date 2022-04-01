import React, { useEffect, useState } from "react";
import "./home.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Header from "../../components/Header";
import { useHistory, useLocation } from "react-router";

import { Layout, Menu } from "antd";
import UserProfileModule from "../userProfileModule";
import BookTicket from "../bookTicket";
import BookingDetails from "../bookingDetails";

import TransactionHistory from "../transactionHistory";
import About from "../about";
import { ChangePassModal, LogOutModal } from "../../components/modal";
import { config } from "../../config";

const { Content, Sider } = Layout;

function Home() {
  const [changePassVisible, setChangePassVisible] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);
  const [headerTitle, setHeaderTitle] = useState("");

  const history = useHistory();

  const location = useLocation();

  const { pathname } = location;

  // console.log(pathname);

  useEffect(() => {
    if (pathname === "/trips") setHeaderTitle("Search Trips");
    if (pathname === "/profile") setHeaderTitle("Profile");
    if (pathname === "/transactions") setHeaderTitle("Transactions");
    if (pathname === "/about") setHeaderTitle("About");
    if (pathname.includes("booking-details")) setHeaderTitle("Booking Details");
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
            <div className="sider-container">
              <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
                <Menu.Item
                  key={"/trips"}
                  onClick={() => history.push("/")}
                  style={{ margin: 0, height: 50 }}
                >
                  Search Trips
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

              <div className="sider-version">build {config.version.build}</div>
            </div>
          </Sider>

          <Layout className="home-content">
            <Content>
              <Switch>
                <Route path="/trips">
                  <BookTicket />
                </Route>

                <Route path="/booking-details/:tripId">
                  <BookingDetails />
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

                <Redirect from="/" to="/trips" />
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
