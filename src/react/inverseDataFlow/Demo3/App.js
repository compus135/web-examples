import React, { useState, useEffect } from "react";
import { request } from "utils";
import { Col, Row } from "antd";
import StudentList from "./StudentList";
import StudentInfo from "./StudentInfo";
import { studentList, studentInfo } from "data";

const App = () => {
  const [students, setStudents] = useState([]);
  const [curstudentInfo, setStudentInfo] = useState(null);
  const [activeStudentId, setActiveStudentId] = useState(null);
  useEffect(() => {
    request({ resolveData: studentList }).then((res) => {
      const activeId = res.resolveData[0].id;
      setStudents(res.resolveData);
      setActiveStudentId(activeId);
      request({
        requestData: activeId,
        resolveData: studentInfo,
      }).then((res) => setStudentInfo(activeId + "---" + res.resolveData.desp));
    });
  }, []);
  return (
    <Row>
      <Col span={8}>
        <StudentList
          students={students}
          onSetActiveStudentId={(id) => {
            setActiveStudentId(id);
            request({
              requestData: id,
              resolveData: studentInfo,
            }).then((res) =>
              setStudentInfo(res.requestData + "---" + res.resolveData.desp)
            );
          }}
          activeStudentId={activeStudentId}
        ></StudentList>
      </Col>
      <Col span={16}>
        <StudentInfo studentInfo={curstudentInfo}></StudentInfo>
      </Col>
    </Row>
  );
};

export default App;
