import React, { Component } from "react";
import { Snackbar, IconButton, Dialog } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import MuiAlert from "@material-ui/lab/Alert";

class ShowSnackbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { isError, showSnackbar, handleClose, message } = this.props;
    return (
      <>
        <Snackbar
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          open={showSnackbar}
          onClose={handleClose}
          autoHideDuration={isError ? undefined : 4000}
        >
          <MuiAlert
            elevation={6}
            action={
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={(e) => handleClose(e, "close")}
              >
                <Close />
              </IconButton>
            }
            variant="filled"
            severity={isError ? "error" : "success"}
          >
            {message}
          </MuiAlert>
        </Snackbar>
        <Dialog
          aria-labelledby="simple-dialog-title"
          open={showSnackbar}
        ></Dialog>
      </>
    );
  }
}

export default ShowSnackbar;
