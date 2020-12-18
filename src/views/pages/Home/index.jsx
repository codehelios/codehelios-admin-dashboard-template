import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";
import { compose } from "redux";
import { Loader } from "views/components";
import HomeComponent from "./HomeComponent";

class Home extends Component {
  render() {
    return isLoaded(this.props.users) ? (
      <HomeComponent {...this.props} />
    ) : (
      <Loader />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    users: state.firestore.ordered.users,
  };
};
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "users", storeAs: "users" }])
)(Home);
