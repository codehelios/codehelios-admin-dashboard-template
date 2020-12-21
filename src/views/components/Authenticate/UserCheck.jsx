import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded } from "react-redux-firebase";

import { Login } from "views/pages";
import { compose } from "redux";
import SplashScreen from "../SplashScreen";
import { setUser } from "state/ducks/app/actions";

class UserCheck extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      (this.props.auth.user === null ||
        this.props.auth.user.email !== this.props.user.email) &&
      this.props.user
    ) {
      this.props.setUser(this.props.user);
    }
  }

  render() {
    if (!this.props.loaded) {
      return <SplashScreen />;
    } else if (!this.props.user) {
      return <Login />;
    } else {
      return this.props.children;
    }
  }
}

const mapStateToProps = (state, props) => {
  return {
    user: state.firestore.data.users
      ? state.firestore.data.users[props.uid]
      : state.firestore.data.users,
    loaded: isLoaded(state.firestore.data.users),
    auth: state.auth,
  };
};

export default compose(
  connect(mapStateToProps, { setUser }),
  firestoreConnect((props) => [{ collection: "users", doc: props.uid }])
)(UserCheck);
