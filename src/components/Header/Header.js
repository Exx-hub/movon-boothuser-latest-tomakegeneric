import React from "react";
import "./Header.css";
import { Button, Menu, Dropdown, Layout } from "antd";
import { DownOutlined } from "@ant-design/icons";
const { Header } = Layout;

function _Header() {
  return (
    <Header className="home-header">
      <div className="home-header-logo">MovOn</div>
      <div className="home-header-right">
        <div className="home-header-title">Booking List</div>
        <div className="home-header-dropdown">
          Booth User <DownOutlined style={{ fontSize: "8px" }} />{" "}
        </div>
      </div>
    </Header>
  );
}

export default _Header;
