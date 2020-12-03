import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";

import { request } from "utils";
import { studentList, studentInfo } from "data";
const App = () => {
  const [curstudentInfo, setStudentInfo] = useState(null);
  const [students, setStudents] = useState([]);
  const [activeStudentId, setActiveStudentId] = useState(null);
  useEffect(() => {
    request({ resolveData: studentList }).then((res) => {
      setStudents(res.resolveData);
      setActiveStudentId(res.resolveData[0].id);
      request({
        requestData: res.resolveData[0].id,
        resolveData: studentInfo,
      }).then((res) =>
        setStudentInfo(res.requestData + "---" + res.resolveData.desp)
      );
    });
  }, []);
  const renderStudentList = students.map((item) => (
    <div
      onClick={() => {
        setActiveStudentId(item.id);
        request({
          requestData: item.id,
          resolveData: studentInfo,
        }).then((res) =>
          setStudentInfo(res.requestData + "---" + res.resolveData.desp)
        );
      }}
    >
      {item.id === activeStudentId ? `ACTIVE---${item.name}` : item.name}
    </div>
  ));
  return (
    <Row>
      <Col span={8}>
        <div>{renderStudentList}</div>
      </Col>
      <Col span={16}>
        <div>{curstudentInfo}</div>
      </Col>
    </Row>
  );
};

export default App;
