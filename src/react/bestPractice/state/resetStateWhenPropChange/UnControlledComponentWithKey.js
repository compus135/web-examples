import React from "react";
import { Input } from "antd";

class EditStudentInfo extends React.Component {
  state = {
    name: this.props.defaultStudent.name,
    address: this.props.defaultStudent.address,
    email: this.props.defaultStudent.email,
  };
  handleChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  };
  render() {
    const { name, address, email } = this.state;
    return (
      <div>
        <h2>姓名：{name}</h2>
        地址：
        <Input value={address} onChange={this.handleChangeAddress}></Input>
        邮箱：<Input value={email} onChange={this.handleChangeEmail}></Input>
      </div>
    );
  }
}

class StudentList extends React.Component {
  state = {
    currentStudent: {},
  };
  studentList = [
    {
      id: 1,
      name: "zhang tree",
      address: "shanghai xuhui",
      email: "zhangThree@163.com",
    },
    {
      id: 2,
      name: "li five",
      address: "shanghai minhang",
      email: "five@163.com",
    },
    {
      id: 3,
      name: "li four",
      address: "wuhan",
      email: "li@163.com",
    },
  ];
  handleClickStudent = (student) => {
    this.setState({ currentStudent: student });
  };
  render() {
    const { currentStudent } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <ul style={{ background: "#ccc", padding: 16, marginRight: 16 }}>
          {this.studentList.map((student) => (
            <li
              key={student.id}
              onClick={() => this.handleClickStudent(student)}
            >
              {student.name}
            </li>
          ))}
        </ul>

        <EditStudentInfo
          key={currentStudent.id}
          defaultStudent={currentStudent}
        />
      </div>
    );
  }
}

export default StudentList;
