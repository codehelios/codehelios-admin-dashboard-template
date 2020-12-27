import React, { Component } from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import HomeComponent from "./HomeComponent";

class Home extends Component {
  render() {
    return <HomeComponent {...this.props} />;
  }
}
const mapStateToProps = (state) => {
  return {};
};
export default compose(connect(mapStateToProps))(Home);
