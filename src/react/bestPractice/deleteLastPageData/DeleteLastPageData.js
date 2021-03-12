import React from "react";
import { Table, Button } from "antd";
import _ from "lodash";

const initDataSource = () => {
  const dataSource = [];
  for (let index = 0; index < 11; index++) {
    dataSource.push({ name: "zs" + index });
  }
  dataSource.push({ name: "zz" });
  return dataSource;
};

const pageSize = 10;
class DeleteLastPageData extends React.Component {
  state = { dataSource: initDataSource(), current: 1 };
  columns = [
    {
      dataIndex: "index",
      title: "序号",
      render: (text, record, index) => {
        const { current } = this.state;
        return (current - 1) * pageSize + index + 1;
      },
    },
    {
      dataIndex: "name",
      title: "姓名",
      filters: [
        {
          text: "zs",
          value: "zs",
        },
      ],
      onFilter: (value, record) => record.name.includes(value),
      render: (text, record, index) => {
        return text;
      },
    },
    {
      key: "delete",
      title: "操作",
      render: (text, record, index) => {
        return (
          <Button onClick={() => this.handleDelete(record.name)}>删除</Button>
        );
      },
    },
  ];
  handleDelete = (name) => {
    this.setState((preState) => {
      const _dataSource = [...preState.dataSource];
      _dataSource.forEach((element, index) => {
        element.name === name && _dataSource.splice(index, 1);
      });
      return { dataSource: _dataSource };
    });
  };

  handleChange = (pagination, filters, sorter, extra) => {
    this.setState({
      current: pagination.current,
      currentDataSourceLen: extra.currentDataSource.length,
    });
  };
  componentDidUpdate(prevProps, prevState) {
    const { dataSource: preDataSource } = prevState;
    const { current, dataSource, currentDataSource } = this.state;
    if (preDataSource.length !== dataSource.length) {
      let _dataSource;
      if (currentDataSource) {
        _dataSource = _.intersectionBy(currentDataSource, dataSource, "name");
      } else {
        _dataSource = dataSource;
      }
      const maxCurrent = Math.ceil(_dataSource.length / pageSize);
      current === 0 && maxCurrent > 0 && this.setState({ current: 1 });
      current !== 0 &&
        maxCurrent < current &&
        this.setState({ current: maxCurrent });
    }
  }

  render() {
    const { dataSource } = this.state;
    return (
      <div>
        <Table
          columns={this.columns}
          dataSource={dataSource}
          rowKey="name"
          onChange={(pagination, filters, sorter, extra) =>
            this.handleChange(pagination, filters, sorter, extra)
          }
        ></Table>
      </div>
    );
  }
}

export default DeleteLastPageData;
