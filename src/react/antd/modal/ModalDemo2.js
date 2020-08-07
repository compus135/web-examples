import React, { useState } from "react";
import { Modal, Button, Input } from "antd";

const ModalDemo = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setvisible(true)}>show</Button>
      <Modal
        visible={visible}
        onCancel={() => {
          console.log("on cancel");
          setvisible(false);
        }}
        destroyOnClose
      >
        <Button onClick={() => setvisible(false)}>hidden</Button>
        <Comp></Comp>
      </Modal>
    </div>
  );
};

const Comp = () => {
  return (
    <div>
      <Input />
    </div>
  );
};

export default ModalDemo;
