import React, { useState } from "react";
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
  const handleOk = () => {
    console.log(name);
  };

  return (
    <Modal visible={props.visible} onOk={handleOk} onCancel={props.onCancel}>
      <Input name={name} onChange={(e) => setName(e.target.value)} />
    </Modal>
  );
};

export default Test;
