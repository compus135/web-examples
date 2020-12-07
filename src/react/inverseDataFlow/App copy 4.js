import React, { useState, useEffect } from "react";
import { Col, Row } from "antd";

import { request } from "utils";
import { studentList, studentInfo } from "data";
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
      request({
        requestData: res.resolveData[0].id,
        resolveData: `curTab---1---${studentInfo.desp}`,
      }).then((res) => setStudentInfo(res.resolveData));
    });
  }, []);
  const renderStudentList = students.map((item) => (
    <div
      onClick={() => {
        setActiveStudentId(item.id);
        curTab === 1 &&
          request({
            requestData: item.id,
            resolveData: studentInfo,
          }).then((res) =>
            setStudentInfo(res.requestData + "--1--" + res.resolveData.desp)
          );
        curTab === 2 &&
          request({
            requestData: item.id,
            resolveData: studentInfo,
          }).then((res) =>
            setStudentInfo2(res.requestData + "--2--" + res.resolveData.desp)
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
        <div>
          <span
            onClick={() => {
              setCurTab(1);
              activeStudentId && request({
                requestData: activeStudentId,
                resolveData: studentInfo,
              }).then((res) =>
                setStudentInfo(res.requestData + "--1--" + res.resolveData.desp)
              );
            }}
          >
            {curTab === 1 ? "active---1" : 1}
          </span>
          <span
            onClick={() => {
              setCurTab(2);
              activeStudentId &&
                request({
                  requestData: activeStudentId,
                  resolveData: studentInfo,
                }).then((res) =>
                  setStudentInfo2(
                    res.requestData + "--2--" + res.resolveData.desp
                  )
                );
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
