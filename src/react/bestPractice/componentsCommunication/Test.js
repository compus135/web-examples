import React, { useState, useEffect } from "react";
import { Modal, Input, Button } from "antd";

const Test = () => {
  const [visible, setVisible] = useState(false);
  const handleClick = () => {
    setVisible(true);
  };
  return (
    <div>
      <Button onClick={handleClick}>show FormModal</Button>
      <FormModal
        visible={visible}
        onCancel={() => setVisible(false)}
      ></FormModal>
    </div>
  );
};

const FormModal = (props) => {
  const [name, setName] = useState("");
  const [list, setList] = useState([{ id: 1, age: 22, email: "df@1234" }]);
  const handleOk = () => {
    console.log(name);
    this.cb();
  };

  const handleChange = (id, key, value) => {
    setList((list) => {
      const ele = list.find((data) => data.id === id);
      ele[key] = value;

      return [...list];
    });
  };

  const handleGetData = (cb) => {
    this.cb = cb;
  };

  const renderItem = (data) => {
    return (
      <li key={data.id}>
        <Input
          value={data.age}
          onChange={(e) => handleChange(data.id, "age", e.target.value)}
        ></Input>
        <Input
          value={data.email}
          onChange={(e) => handleChange(data.id, "email", e.target.value)}
        ></Input>
      </li>
    );
  };

  return (
    <Modal visible={props.visible} onOk={handleOk} onCancel={props.onCancel}>
      <Input value={name} onChange={(e) => setName(e.target.value)} />
      <TableForm callBack={handleGetData} />
    </Modal>
  );
};

const TableForm = (props) => {
  const [list, setList] = useState([{ id: 1, age: 232, email: "df@1234" }]);
  const callback = props.callback;

  useEffect(() => {
    const getData = () => {
      return list;
    };
    callback(getData);
  }, [callback, list]);

  const handleChange = (id, key, value) => {
    setList((list) => {
      const ele = list.find((data) => data.id === id);
      ele[key] = value;

      return [...list];
    });
  };

  const handleAdd = () => {};

  const renderItem = (data) => {
    return (
      <li key={data.id}>
        <Input
          value={data.age}
          onChange={(e) => handleChange(data.id, "age", e.target.value)}
        ></Input>
        <Input
          value={data.email}
          onChange={(e) => handleChange(data.id, "email", e.target.value)}
        ></Input>
      </li>
    );
  };

  return <ul>{list.map((data) => renderItem(data))}</ul>;
};

export default Test;
