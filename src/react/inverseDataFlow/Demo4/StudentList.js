import React, { useState, useEffect } from "react";
import { request } from "utils";
import { studentList } from "data";

const StudentList = ({ onSetActiveStudentId, activeStudentId }) => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    console.log("request studentList");
    request({ resolveData: studentList }).then((res) => {
      const activeId = res.resolveData[0].id;
      setStudents(res.resolveData);
      onSetActiveStudentId(activeId);
    });
  }, [onSetActiveStudentId]);
  const renderStudentList = students.map((item) => (
    <div onClick={() => onSetActiveStudentId(item.id)}>
      {item.id === activeStudentId ? `ACTIVE---${item.name}` : item.name}
    </div>
  ));
  return <div>{renderStudentList}</div>;
};

export default StudentList;
