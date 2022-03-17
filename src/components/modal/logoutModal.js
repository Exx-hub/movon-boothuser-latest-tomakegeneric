import React from "react";
import { Modal, Button } from "antd";
import { UserProfile } from "../../utility";
import "./modal.css";

function LogOutModal(props) {
  const handleLogout = () => {
    UserProfile.clearData();
    props.history.push("/");
  };
  return (
    <Modal
      visible={props.visible}
      className="logout-modal"
      footer={[
        <Button className="cancel-btn" onClick={props.handleCancel}>
          Cancel
        </Button>,
        <Button className="ok-btn" onClick={handleLogout}>
          Ok
        </Button>,
      ]}
    >
      Are you sure you want to logout?
    </Modal>
  );
}

export default LogOutModal;
