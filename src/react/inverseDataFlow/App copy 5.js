import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";

import { request } from "utils";
import { studentList } from "data";
const App = () => {
  const [curTab, setCurTab] = useState(1);
  const [curstudentInfo, setStudentInfo] = useState(null);
  const [curstudentInfo2, setStudentInfo2] = useState(null);
  const [students, setStudents] = useState([]);
  const [activeStudentId, setActiveStudentId] = useState(null);
  useEffect(() => {
    request({ resolveData: studentList, delay: 10000 }).then((res) => {
      setStudents(res.resolveData);
      setActiveStudentId(res.resolveData[0].id);
    });
  }, []);
  useEffect(() => {
   activeStudentId && request({
      resolveData: `id---${activeStudentId}---curTab---${curTab}---info`,
      delay: 10000,
    }).then((res) => {
      curTab === 1 && setStudentInfo(res.resolveData);
      curTab === 2 && setStudentInfo2(res.resolveData);
    });
  }, [activeStudentId, curTab]);

  const renderStudentList = students.map((item) => (
    <div
      onClick={() => {
        setActiveStudentId(item.id);
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
        <div>
          <span
            onClick={() => {
              setCurTab(1);
            }}
          >
            {curTab === 1 ? "active---1" : 1}
          </span>
          <span
            onClick={() => {
              setCurTab(2);
            }}
          >
            {curTab === 2 ? "active---2" : 2}
          </span>
        </div>
        {curTab === 1 && <div>{curstudentInfo}</div>}
        {curTab === 2 && <div>{curstudentInfo2}</div>}
      </Col>
    </Row>
  );
};

export default App;
