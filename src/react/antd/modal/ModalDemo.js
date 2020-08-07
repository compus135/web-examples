import React, { useState } from "react";
import { Modal, Button } from "antd";

const ModalDemo = () => {
  const [visible, setvisible] = useState(false);
  return (
    <div>
      <Button onClick={() => setvisible(true)}>show</Button>
      <Modal
        visible={visible}
        onCancel={() => setvisible(false)}
        destroyOnClose
      >
        <Comp></Comp>
      </Modal>
    </div>
  );
};

const Comp = () => {
  const [count, setcount] = useState(0);
  return (
    <div>
      {count}
      <Button onClick={() => setcount((preCount) => preCount + 1)}>
        increase
      </Button>
    </div>
  );
};

export default ModalDemo;
