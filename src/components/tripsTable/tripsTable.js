import React from "react";
import "./TripsTable.css";

import { Table, Button } from "antd";

const tableSource = [
  {
    title: "Trip Id",
    dataIndex: "tripId",
    key: "tripId",
  },
  {
    title: "Start Station",
    dataIndex: "startStation",
    key: "startStation",
  },
  {
    title: "End Station",
    dataIndex: "endStation",
    key: "endStation",
  },
  {
    title: "Start Date",
    dataIndex: "startDate",
    key: "startDate",
  },
  {
    title: "Selected Bus",
    dataIndex: "selectedBus",
    key: "selectedBus",
  },
  {
    title: "Action",
    key: "action",
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
