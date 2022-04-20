import { Modal, Button, Table } from "antd";
import "./modal.css";

import { CaretRightOutlined } from "@ant-design/icons";

const tableSource = [
  {
    title: "Passenger Name",
    dataIndex: "passenger",
    key: "passenger",
    align: "center",
  },
  {
    title: "Seat No.",
    dataIndex: "seat",
    key: "seat",
    align: "center",
  },
];

function ConfirmModal(props) {
  const {
    visible,
    handleCancel,
    handleOk,
    tripDetails,
    passengerDetails,
    farePerSeat,
    noOfSeats,
  } = props;
  return (
    <Modal
      title="Booking Summary"
      visible={visible}
      className="modal"
      onCancel={handleCancel}
      footer={[
        <Button key={"cancel"} className="cancel-btn" onClick={handleCancel}>
          Cancel
        </Button>,
        <Button key={"confirm"} className="ok-btn" onClick={handleOk}>
          Confirm Booking
        </Button>,
      ]}
    >
      <div>
        <div className="details-div">
          <h2>Trip Details</h2>
          <div className="trip-route">
            {tripDetails.startStation} <CaretRightOutlined />{" "}
            {tripDetails.endStation}
          </div>
          <div className="trip-date">{tripDetails.startDate}</div>
        </div>

        <div className="details-div">
          <h2>Passenger Details</h2>
          <Table
            columns={tableSource}
            dataSource={passengerDetails}
            pagination={false}
          />
        </div>

        <div className="fare-details-div">
          <h2>Fare Details</h2>
          <div>
            <span>Fare per Seat:</span> ₱{farePerSeat}
          </div>
          <div>
            <span>No. of Seats:</span> &nbsp; {noOfSeats}
          </div>
          <div style={{ fontWeight: "bold", marginTop: 8, fontSize: 16 }}>
            <span>Total Fare:</span> ₱{(noOfSeats * farePerSeat).toFixed(2)}
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default ConfirmModal;
