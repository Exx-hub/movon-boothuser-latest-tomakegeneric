import React from "react";
import { Modal, Button } from "antd";
import { logoutSuccess, UserProfile } from "../../utility";
import "./modal.css";

function LogOutModal(props) {
  const handleLogout = () => {
    UserProfile.clearData();
    logoutSuccess();
    props.history.push("/");
  };
  return (
    <Modal
      visible={props.visible}
      className="modal"
      onCancel={props.handleCancel}
      footer={[
        <Button
          key={"cancel-button"}
          className="cancel-btn"
          onClick={props.handleCancel}
        >
          Cancel
        </Button>,
        <Button key={"ok-button"} className="ok-btn" onClick={handleLogout}>
          Ok
        </Button>,
      ]}
    >
      Are you sure you want to logout?
    </Modal>
  );
}

export default LogOutModal;
