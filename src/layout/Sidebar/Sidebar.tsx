import { Menu, Layout } from "antd";
import { useLocation, useNavigate } from "react-router-dom";
import { config } from "../../config";
import "./Sidebar.css";
const { Sider } = Layout;

function Sidebar() {
  const navigate = useNavigate();

  const location = useLocation();
  const { pathname } = location;

  return (
    <Sider width={210} className="sider">
      <div className="sider-container">
        <Menu theme="dark" mode="inline" selectedKeys={[pathname]}>
          <Menu.Item
            key={"/"}
            onClick={() => navigate("/")}
            style={{ margin: 0, height: 50 }}
          >
            Search Trips
          </Menu.Item>
          <Menu.Item
            key={"/transactions"}
            onClick={() => navigate("/transactions")}
            style={{ margin: 0, height: 50 }}
          >
            Transaction History
          </Menu.Item>
          <Menu.Item
            key={"/about"}
            onClick={() => navigate("/about")}
            style={{ margin: 0, height: 50 }}
          >
            About
          </Menu.Item>
        </Menu>

        <div className="sider-version">build {config.version.build}</div>
      </div>
    </Sider>
  );
}

export default Sidebar;
