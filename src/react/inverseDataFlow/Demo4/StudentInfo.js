import React, { useState, useEffect } from "react";
import { request } from "utils";
import { studentInfo } from "data";

const StudentInfo = ({ activeStudentId }) => {
  const [curstudentInfo, setStudentInfo] = useState(null);
  useEffect(() => {
    request({
      requestData: activeStudentId,
      resolveData: studentInfo,
    }).then((res) =>
      setStudentInfo(activeStudentId + "---" + res.resolveData.desp)
    );
  }, [activeStudentId]);
  return <div>{curstudentInfo}</div>;
};

export default StudentInfo;
