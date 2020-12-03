import React, { useState, useEffect } from "react";

import { studentList, studentInfo } from "data";

const StudentList = ({ students, onSetActiveStudentId, activeStudentId }) => {
  const renderStudentList = students.map((item) => (
    <div onClick={() => onSetActiveStudentId(item.id)}>
      {item.id === activeStudentId ? `ACTIVE---${item.name}` : item.name}
    </div>
  ));
  return <div>{renderStudentList}</div>;
};

export default StudentList;
