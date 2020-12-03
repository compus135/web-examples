import React, { useState, useCallback } from "react";

import { Col, Row } from "antd";
import StudentList from "./StudentList";
import StudentInfo from "./StudentInfo";

const App = () => {
  const [activeStudentId, setActiveStudentId] = useState(null);
  const handleActiveChange = useCallback((id) => {
    setActiveStudentId(id);
  }, []);

  return (
    <Row>
      <Col span={8}>
        <StudentList
          onSetActiveStudentId={handleActiveChange}
          activeStudentId={activeStudentId}
        ></StudentList>
      </Col>
      <Col span={16}>
        <StudentInfo activeStudentId={activeStudentId}></StudentInfo>
      </Col>
    </Row>
  );
};

export default App;
