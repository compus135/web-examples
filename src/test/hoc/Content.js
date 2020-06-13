import React, { Component } from "react";
import withModal from "./withModal";

class Content extends Component {
  render() {
    return <div>Content</div>;
  }
}

export default withModal(Content);
