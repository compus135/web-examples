import React, { PureComponent } from "react";
import memoize from "memoize-one";

/**
 * 当prop发生变化，重新计算数据
 * 待渲染数据由studentList和filter text计算出来的
 */
class App extends React.Component {
  state = {
    studentList: [
      { id: 1, name: "zhang tree" },
      { id: 2, name: "li five" },
    ],
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        studentList: [
          { id: 1, name: "zhang tree" },
          { id: 2, name: "li five" },
          { id: 3, name: "li four" },
        ],
      });
    }, 5000);
  }
  render() {
    return <StudentList studentList={this.state.studentList}></StudentList>;
  }
}

class StudentList extends PureComponent {
  state = {
    filterText: "",
  };

  handleChange = (event) => {
    this.setState({ filterText: event.target.value });
  };

  getFilteredList = memoize((studentList, filterText) =>
    studentList.filter((item) => item.name.includes(filterText))
  );

  render() {
    const filteredList = this.getFilteredList(
      this.props.studentList,
      this.state.filterText
    );

    return (
      <React.Fragment>
        <input onChange={this.handleChange} value={this.state.filterText} />
        <ul>
          {filteredList.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </React.Fragment>
    );
  }
}

export default App;
