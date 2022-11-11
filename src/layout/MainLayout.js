import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import Header from "./Header";
import Sidebar from "./Sidebar";

const { Content } = Layout;

function MainLayout() {
  return (
    <Layout>
      <Header />
      <Layout>
        <Sidebar />
        <Content>
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;

{
  /* <ChangePassModal
visible={changePassVisible}
handleCancel={() => setChangePassVisible(false)}
handleOk={() => setChangePassVisible(false)}
/>
<LogOutModal
visible={logOutVisible}
handleCancel={() => setLogOutVisible(false)}
handleOk={() => setLogOutVisible(false)}
history={history}
/> */
}
