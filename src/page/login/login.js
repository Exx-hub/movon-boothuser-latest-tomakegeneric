import React from "react";
import "./login.css";
import movonLogo from "../../assets/images/movonLogo.png";

import { Image, Form, Input, Button, Spin, Checkbox, Space } from "antd";
import { config } from "../../config";

function Login() {
  return (
    <div className="login-page">
      {/* image  */}
      <Image preview={false} className="movon-logo" src={movonLogo} alt="" />
      <div className="loginPage-formContainer">
        {/* form box  */}
        <Form>
          <div className="loginForm-header">
            <span className="loginForm-text">Log In</span>
          </div>
          <Space direction="vertical" style={{ width: "100%" }}>
            <Form.Item
              style={{ margin: 0, marginBottom: 6 }}
              name="username"
              rules={[{ required: true, message: "Username is required!" }]}
            >
              <Input
                // value={state.staffId}
                // onChange={(e) =>
                //   setState({ ...state, ...{ staffId: e.target.value } })
                // }
                placeholder="Username"
                // disabled={state.isLoading}
                // suffix={<UserOutlined />}
                style={{ padding: 10 }}
              />
            </Form.Item>

            <Form.Item
              // style={{ margin: 3 }}
              name="password"
              rules={[{ required: true, message: "Password is required!" }]}
            >
              <Input.Password
                // value={state.password}
                // onChange={(e) =>
                //   setState({ ...state, ...{ password: e.target.value } })
                // }
                placeholder="Password"
                // disabled={state.isLoading}
                style={{ padding: 10 }}
              />
            </Form.Item>

            <div className="login-button-div">
              <Button className="login-button">LOGIN</Button>

              <div className="forgot-password">Forgot Password?</div>
            </div>
          </Space>
        </Form>
      </div>
      <div className="version-div">
        <span className="version">
          2021 © MovOn {config.version.environment} v{config.version.build}
        </span>
      </div>
    </div>
  );
}

export default Login;
