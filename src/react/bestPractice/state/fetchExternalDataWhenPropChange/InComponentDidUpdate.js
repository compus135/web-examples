import React from "react";
import { slowlyFetchStudent } from "service";
import StudentList from "react/demoComponents/StudentList";

class Student extends React.Component {
  state = { externalData: null };
  componentDidMount() {
    this._loadAsyncData(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.setState({ externalData: null });
      this._loadAsyncData(this.props.id);
    }
  }

  render() {
    const { externalData } = this.state;
    return !externalData ? (
      <div>loading...</div>
    ) : (
      <div>{JSON.stringify(externalData)}</div>
    );
  }

  _loadAsyncData(id) {
    slowlyFetchStudent(id).then((response) => {
      this.setState({ externalData: response });
    });
  }
}

class App extends React.Component {
  state = { studentId: null };
  handleChangeStudent = (student) => {
    this.setState({ studentId: student.id });
  };
  render() {
    const { studentId } = this.state;
    return (
      <div style={{ display: "flex" }}>
        <StudentList onChangeStudent={this.handleChangeStudent}></StudentList>
        <Student id={studentId} />
      </div>
    );
  }
}

export default App;
