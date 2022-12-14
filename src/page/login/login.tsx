import React, { useState } from "react";
import "./login.css";
import movonLogo from "../../assets/images/movonLogo.png";

import { loginSuccessPrompt, UserProfile } from "../../utility/index";

import { Image, Form, Input, Button, Spin, Space } from "antd";
import { UserOutlined, LoadingOutlined } from "@ant-design/icons";
import { config } from "../../config";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const onFinish = () => {
    setIsLoading(true);

    // login api here!!!
    // add alerts/notifications

    console.log(username, password);

    // hardcoded setting of creds in localstorage w/out api
    UserProfile.setCredential({
      user: username,
      token: password,
    });

    setTimeout(() => {
      setIsLoading(false);
      loginSuccessPrompt();

      navigate("/");
    }, 2000);
  };

  return (
    <div className="login-page">
      <Image preview={false} className="movon-logo" src={movonLogo} alt="" />
      <div className="loginPage-formContainer">
        <Form onFinish={onFinish}>
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
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
                disabled={isLoading}
                suffix={<UserOutlined style={{ color: "#6C7077" }} />}
                style={{ padding: 10 }}
              />
            </Form.Item>

            <Form.Item
              // style={{ margin: 3 }}
              name="password"
              rules={[{ required: true, message: "Password is required!" }]}
            >
              <Input.Password
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                disabled={isLoading}
                style={{ padding: 10 }}
              />
            </Form.Item>

            <div className="login-button-div">
              <Button
                htmlType="submit"
                className="login-button"
                disabled={isLoading}
              >
                {isLoading && (
                  <div className="login-button-spinner">
                    <Spin
                      indicator={
                        <LoadingOutlined
                          style={{ fontSize: 24, color: "#333" }}
                          spin
                        />
                      }
                    />
                  </div>
                )}
                LOGIN
              </Button>

              <div className="forgot-password">Forgot Password?</div>
            </div>
          </Space>
        </Form>
      </div>
      <div className="version-div">
        <span className="version">
          2021 ?? MovOn {config.version.environment} v{config.version.build}
        </span>
      </div>
    </div>
  );
}

export default Login;
