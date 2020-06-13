import React from "react";
import { Modal } from "antd";

const withModal = (WrapperedComponent) => {
  return class extends React.Component {
    render() {
      return (
        <Modal visible={this.props.visible} onCancel={this.props.onClose}>
          <WrapperedComponent {...this.props}></WrapperedComponent>
        </Modal>
      );
    }
  };
};

export default withModal;
