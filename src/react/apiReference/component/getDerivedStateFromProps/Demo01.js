import React from "react";
// Before
export default class ExampleComponent extends React.Component {
  state = {
    isScrollingDown: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.currentRow !== nextProps.currentRow) {
      this.setState({
        isScrollingDown: nextProps.currentRow > this.props.currentRow,
      });
    }
  }
}
