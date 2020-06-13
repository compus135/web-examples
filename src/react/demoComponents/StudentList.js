import React, { Component } from "react";
import { studentList } from "data";

class StudentList extends Component {
  state = { currentStudentId: this.props.defaultId };
  handleClick = (student) => {
    this.setState({ currentStudentId: student.id });
    this.props.onChangeStudent(student);
  };
  render() {
    const { currentStudentId } = this.state;
    return (
      <ul>
        {studentList.map((student) => (
          <li
            className={currentStudentId === student.id ? "active" : ""}
            onClick={() => this.handleClick(student)}
          >
            {student.name}
          </li>
        ))}
      </ul>
    );
  }
}

export default StudentList;
