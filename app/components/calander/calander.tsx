import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import "antd/dist/reset.css";

const { RangePicker } = DatePicker;

const USACalendar = () => {
  return (
    <div style={{ padding: 20 }}>
      <RangePicker
        format="MMM DD, YYYY"     // USA format
        placement="bottomLeft"
        allowClear
        showToday
        style={{ width: 300 }}
        defaultValue={[
          dayjs("2025-12-01"),
          dayjs("2025-12-13"),
        ]}
      />
    </div>
  );
};

export default USACalendar;
