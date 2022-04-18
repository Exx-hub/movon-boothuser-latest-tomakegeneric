import { Modal, Button, Table } from "antd";
import "./modal.css";

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
  return (
    <Modal
      title="Booking Summary"
      visible={props.visible}
      className="modal"
      onCancel={props.handleCancel}
      footer={[
        <Button
          key={"cancel"}
          className="cancel-btn"
          onClick={props.handleCancel}
        >
          Cancel
        </Button>,
        <Button key={"confirm"} className="ok-btn" onClick={props.handleOk}>
          Confirm Booking
        </Button>,
      ]}
    >
      {/* origin destination */}
      <div>Trip Details</div>
      {/* <div>
        {props.tripDetails.startStation} {">"} {props.tripDetails.endStation}
      </div>
      <div>{props.tripDetails.startDate}</div> */}

      <div>Passenger Details</div>
      {/* {props.passengerDetails.map((item, i) => {
        return (
          <h2 key={i}>
            {item.passenger} {item.seat}
          </h2>
        );
      })} */}
      <Table
        columns={tableSource}
        dataSource={props.passengerDetails}
        pagination={false}
      />
      {/* passenger names & selected seats   */}
      <div>Fare Details</div>
      {/* fare per seat & total fare   */}
    </Modal>
  );
}

export default ConfirmModal;
