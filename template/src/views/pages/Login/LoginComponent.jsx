import React, { Component } from "react";
import { Container, Paper, TextField, Button } from "@material-ui/core";
import { Field } from "redux-form";

import google from "views/static/icons/google.svg";
import { ForgotPassword } from "./ForgotPassword";
import { ShowSnackbar } from "views/components";

class Login extends Component {
  state = { showForgotPage: false, showSnackbar: true };

  componentDidMount() {
    this._ismounted = true;
  }

  componentWillUnmount() {
    this._ismounted = false;
  }

  renderInput = ({ input, meta, label, type }) => {
    const { classes } = this.props;
    return (
      <TextField
        required
        {...input}
        label={label}
        type={type}
        variant="outlined"
        className={classes.input}
      />
    );
  };

  onSubmit = async (fieldsValue) => {
    await this.props.onSubmit(fieldsValue);
    if (this._ismounted) {
      this.setState({
        showSnackbar: true,
      });
    }
  };

  handleClose = (e, r) => {
    if (r !== "clickaway") {
      this.setState({ showSnackbar: false });
    }
  };

  render() {
    const { classes } = this.props;
    return this.state.showForgotPage ? (
      <ForgotPassword
        {...this.props}
        onRecoveryLinkSend={() => {
          this.setState({ showForgotPage: false });
        }}
      />
    ) : (
      <Container className={classes.root}>
        <Paper className={classes.loginCard}>
          <div className={classes.title}>Qureator</div>
          <form
            className={classes.form}
            onSubmit={this.props.handleSubmit(this.onSubmit)}
          >
            <Field
              name="email"
              component={this.renderInput}
              label="Email"
              type="email"
            />
            <Field
              name="password"
              component={this.renderInput}
              label="Password"
              type="password"
            />

            <Button
              variant="contained"
              size="large"
              color="primary"
              type="submit"
              className={classes.loginButton}
            >
              Login
            </Button>

            <Button
              size="small"
              onClick={() => this.setState({ showForgotPage: true })}
            >
              <u>Recover or set password</u>
            </Button>
          </form>
          OR
          <Button
            variant="contained"
            size="large"
            type="submit"
            onClick={async () => {
              await this.props.onGoogleLogin();
              if (this._ismounted) {
                this.setState({
                  showSnackbar: true,
                });
              }
            }}
            startIcon={
              <img src={google} alt="gooogle" className={classes.gIcon} />
            }
            classes={{
              label: classes.gButtonLabel,
              startIcon: classes.gButtonStartIcon,
              containedSizeLarge: classes.gButton,
            }}
          >
            <div>Login in with Google</div>
          </Button>
        </Paper>
        {(() => {
          if (this.props.auth.error !== null && this.state.showSnackbar) {
            return (
              <ShowSnackbar
                message={this.props.auth.error}
                isError={true}
                showSnackbar={this.state.showSnackbar}
                handleClose={this.handleClose}
              />
            );
          } else if (!this.state.showSnackbar) {
            return null;
          }
        })()}
      </Container>
    );
  }
}

export default Login;
