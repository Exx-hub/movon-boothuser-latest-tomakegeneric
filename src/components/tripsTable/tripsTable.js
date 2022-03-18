import React from "react";
import "./TripsTable.css";

import { Table, Button, Input } from "antd";

const tableSource = [
  {
    title: "Trip Id",
    dataIndex: "tripId",
    key: "tripId",
    align: "center",
  },
  {
    title: "Start Station",
    dataIndex: "startStation",
    key: "startStation",
    align: "center",
  },
  {
    title: "End Station",
    dataIndex: "endStation",
    key: "endStation",
    align: "center",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
    align: "center",
  },
  {
    title: "Selected Bus",
    dataIndex: "selectedBus",
    key: "selectedBus",
    align: "center",
  },
  {
    title: "Action",
    key: "action",
    align: "center",
    render: () => <Button>View</Button>,
  },
];

const dataSource = [
  {
    tripId: "TPIKYTBT8O36",
    startStation: "PITX / TURBINA",
    endStation: "DAET",
    startDate: "09/12/2021 06:00 PM",
    selectedBus: "00-00-11",
  },
  {
    tripId: "TPIKYTBT8O36",
    startStation: "PITX / TURBINA",
    endStation: "DAET",
    startDate: "09/12/2021 06:00 PM",
    selectedBus: "00-00-11",
  },
  {
    tripId: "TPIKYTBT8O36",
    startStation: "PITX / TURBINA",
    endStation: "DAET",
    startDate: "09/12/2021 06:00 PM",
    selectedBus: "00-00-11",
  },
  {
    tripId: "TPIKYTBT8O36",
    startStation: "PITX / TURBINA",
    endStation: "DAET",
    startDate: "09/12/2021 06:00 PM",
    selectedBus: "00-00-11",
  },
];

function TripsTable() {
  return (
    <div className="trips-table-container">
      {/* search bars  */}
      {/* table   */}
      <Table
        // loading={this.state.fetching}
        // scroll={{ x: true }}
        // rowKey={(e) => e.key}
        // pagination={false}
        columns={tableSource}
        dataSource={dataSource}
      />
    </div>
  );
}

export default TripsTable;
