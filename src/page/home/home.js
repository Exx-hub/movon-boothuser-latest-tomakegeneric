import React, { useEffect, useState } from "react";
import "./home.css";
import { Switch, Route, Redirect } from "react-router-dom";
import { useHistory } from "react-router";

import Header from "../../components/Header";
import { Layout, Menu } from "antd";
import UserProfileModule from "../userProfileModule";
import BookTicket from "../bookTicket/bookTicket";
import { ChangePassModal, LogOutModal } from "../../components/modal";

const { Content, Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
  const [changePassVisible, setChangePassVisible] = useState(false);
  const [logOutVisible, setLogOutVisible] = useState(false);

  const history = useHistory();

  useEffect(() => {
    console.log(changePassVisible);
    console.log(logOutVisible);
  }, [changePassVisible, logOutVisible]);

  return (
    <>
      <Layout className="home-page-container">
        <Header
          setChangePassVisible={() => setChangePassVisible(true)}
          setLogOutVisible={() => setLogOutVisible(true)}
        />
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
