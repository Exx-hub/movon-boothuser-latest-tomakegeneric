import React from "react";
import "./transactionHistory.css";

import { Input, DatePicker, Button, Dropdown, Table } from "antd";

import {
  SearchOutlined,
  DownOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

const { RangePicker } = DatePicker;

const tableSource = [
  {
    title: "Trip Id",
    dataIndex: "tripId",
    key: "tripId",
    align: "center",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
    align: "center",
  },
  {
    title: "Transaction Type",
    dataIndex: "transType",
    key: "transType",
    align: "center",
  },
  {
    title: "Ticket ID",
    dataIndex: "ticketId",
    key: "ticketId",
    align: "center",
  },
  {
    title: "Transaction Date",
    dataIndex: "transactionDate",
    key: "transactionDate",
    align: "center",
  },
];

function TransactionHistory() {
  const handleDownload = () => {};
  const menu = (
    <div className="dropdown-menu">
      <div onClick={handleDownload}>
        <ProfileOutlined /> Download XLS
      </div>
    </div>
  );

  return (
    <div className="transactionHistory-container">
      <div className="search-date-container">
        <div className="table-title">Search Transaction</div>

        <div className="input-date-dropdown-div">
          <Input
            placeholder="Enter Trip ID"
            style={{ width: 300, marginRight: 20 }}
            // value={rsInput}
            // onChange={(e) => setRsInput(e.target.value)}
            // onPressEnter={searchByRsNo}
            suffix={
              <SearchOutlined
                style={{ cursor: "pointer" }}
                // onClick={searchByRsNo}
              />
            }
          />
          <RangePicker style={{ width: "100%", marginRight: 20 }} />

          <Dropdown overlay={menu}>
            <Button className="dropdown-item-btn">
              <DownOutlined /> Download
            </Button>
          </Dropdown>
        </div>
      </div>

      <div className="dashed-line" />

      <div>
        <Table
          // loading={this.state.fetching}
          // scroll={{ y: 500 }}
          rowKey="key"
          // pagination={{ position: ["bottomCenter"], pageSize: 10 }} // pageSize set dropdown
          // pagination={false}
          columns={tableSource}
          // dataSource={dataSource}
        />
      </div>
    </div>
  );
}

export default TransactionHistory;
