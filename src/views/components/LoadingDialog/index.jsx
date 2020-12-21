import { CircularProgress, Dialog, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
const useStyles = makeStyles(() => ({
  dialogPaper: {
    backgroundColor: "transparent",
    overflow: "hidden",
    boxShadow: "none",
    alignItems: "center",
  },
}));
const LoadingDialog = (props) => {
  const { open, label } = props;
  const classes = useStyles();
  return (
    <Dialog
      classes={{
        paper: classes.dialogPaper,
      }}
      open={open}
      label={label}
    >
      <CircularProgress />

      <Typography
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "10px",
        }}
      >
        {label}
      </Typography>
    </Dialog>
  );
};
export default LoadingDialog;
