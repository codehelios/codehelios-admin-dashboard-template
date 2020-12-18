import React, { Component } from "react";
import { Box, TextField, Button } from "@material-ui/core";

import { connect } from "react-redux";

import { app } from "state/ducks/app";
import { ShowSnackbar, PrimaryButton } from "views/components";
class ForgotPasswordComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { showSnackbar: false, email: "" };
  }

  handleClose = (e, r) => {
    if (r !== "clickaway") {
      if (this.props.auth.error === null) {
        return this.props.onRecoveryLinkSend();
      }
      this.setState({ showSnackbar: false });
    }
  };

  render() {
    return (
      <Box
        width="100%"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Box
          display="flex"
          flexDirection="column"
          padding="40px"
          width="70%"
          maxWidth="480px"
          borderRadius="6px"
          bgcolor="#fff"
          boxShadow={2}
          fontFamily="Nunito"
        >
          <Box
            textAlign="center"
            fontWeight="bold"
            fontSize="32px"
            lineHeight="44px"
            color="#022B3A"
          >
            Qureator
          </Box>
          <Box
            textAlign="center"
            fontSize="18px"
            lineHeight="24px"
            color="#022B3A"
          >
            Find the best near you!
          </Box>
          <Box
            color="rgba(0,0,0,0.7)"
            fontSize="22px"
            marginTop="32px"
            fontWeight="600"
            marginBottom="8px"
          >
            Recover Password
          </Box>
          <Box
            color="rgba(0,0,0,0.7)"
            fontSize="16px"
            marginTop="16px"
            marginBottom="32px"
          >
            Don't worry, happens to the best of us.
          </Box>
          <form
            autoComplete="off"
            onSubmit={async (e) => {
              e.preventDefault();
              await this.props.sendRecoveryLink(this.state.email);
              this.setState({ showSnackbar: true });
            }}
          >
            <TextField
              fullWidth={true}
              id="email"
              type="email"
              required={true}
              onChange={(e) => this.setState({ email: e.target.value })}
              value={this.state.email}
              label="Email address"
              variant="outlined"
            />
            <PrimaryButton type="submit" fullWidth={true}>
              email me a recovery link
            </PrimaryButton>
            <Button
              variant="outlined"
              fullWidth={true}
              onClick={this.props.onRecoveryLinkSend}
              style={{ marginTop: "10px" }}
            >
              Cancel
            </Button>
          </form>
        </Box>
        {(() => {
          if (this.props.auth.error === null && this.state.showSnackbar) {
            return (
              <ShowSnackbar
                message="Recovery link sent!"
                isError={false}
                showSnackbar={this.state.showSnackbar}
                handleClose={this.handleClose}
              />
            );
          } else if (!this.state.showSnackbar) {
            return null;
          } else {
            return (
              <ShowSnackbar
                message={this.props.auth.error}
                isError={true}
                showSnackbar={this.state.showSnackbar}
                handleClose={this.handleClose}
              />
            );
          }
        })()}
      </Box>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.auth,
  };
};
export const ForgotPassword = connect(mapStateToProps, {
  sendRecoveryLink: app.sendRecoveryLink,
})(ForgotPasswordComponent);
