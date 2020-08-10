import React from "react";

import { Row, Col } from "antd";

const GridsDemo = () => {
  return (
    <div>
      <Row gutter={20}>
        <Col>1</Col>
        <Col>2</Col>
      </Row>
      <div>1</div>
    </div>
  );
};

export default GridsDemo;
