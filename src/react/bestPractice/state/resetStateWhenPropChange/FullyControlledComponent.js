import React from "react";
import { Input } from "antd";

class EditStudentInfo extends React.Component {
  render() {
    const { name, address, email, onChangeAddress, onChangeEmail } = this.props;
    return (
      <div>
        <h2>姓名：{name}</h2>
        地址：
        <Input value={address} onChange={onChangeAddress}></Input>
        邮箱：<Input value={email} onChange={onChangeEmail}></Input>
      </div>
    );
  }
}

class StudentList extends React.Component {
  state = {
    name: "",
    address: "",
    email: "",
  };
  handleChangeAddress = (e) => {
    this.setState({ address: e.target.value });
  };
  handleChangeEmail = (e) => {
    this.setState({ email: e.target.value });
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
    this.setState({
      name: student.name,
      address: student.address,
      email: student.email,
    });
  };
  render() {
    const { name, address, email } = this.state;
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
          name={name}
          address={address}
          email={email}
          onChangeAddress={this.handleChangeAddress}
          onChangeEmail={this.handleChangeEmail}
        />
      </div>
    );
  }
}

export default StudentList;
