import React from "react";
import "./userProfileModule.css";
import { Row, Col } from "antd";

function UserProfileModule() {
  return (
    <div className="user-profile-container">
      <Row style={{ marginBottom: 20 }}>
        <Col style={{ padding: 10 }} span={12}>
          <Row className="label">Name</Row>
          <Row className="value">test</Row>
        </Col>
        <Col style={{ padding: 10 }} span={12}>
          <Row className="label">Email</Row>
          <Row className="value">test@gmail.com</Row>
        </Col>
      </Row>
      <Row>
        <Col style={{ padding: 10 }} span={12}>
          <Row className="label">Phone Number</Row>
          <Row className="value">09164209977</Row>
        </Col>
        <Col style={{ padding: 10 }} span={12}>
          <Row className="label">Bus Company</Row>
          <Row className="value">DLTB Bus Company</Row>
        </Col>
      </Row>
    </div>
  );
}

export default UserProfileModule;
