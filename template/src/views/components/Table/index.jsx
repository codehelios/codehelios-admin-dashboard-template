import React, { Component } from "react";
import TableComponent from "./TableComponent";
class Table extends Component {
  render() {
    return <TableComponent {...this.props} />;
  }
}

export default Table;
