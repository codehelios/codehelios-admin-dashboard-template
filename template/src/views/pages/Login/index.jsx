import React, { Component } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { reduxForm } from "redux-form";
import { withStyles } from "@material-ui/core";

import Login from "./LoginComponent";
import { signin, googleSignin } from "state/ducks/app/actions";
import styles from "./styles";

class LoginContainer extends Component {
  render() {
    return (
      <Login
        {...this.props}
        onSubmit={(creds) => this.props.signin(creds)}
        onGoogleLogin={this.props.googleSignin}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    firebaseAuth: state.firebase.auth,
    auth: state.auth,
  };
};

export default compose(
  connect(mapStateToProps, { signin, googleSignin }),
  withStyles(styles),
  reduxForm({ form: "login" })
)(LoginContainer);
