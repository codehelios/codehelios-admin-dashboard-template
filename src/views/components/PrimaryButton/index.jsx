import { Button, makeStyles } from "@material-ui/core";
import React from "react";
const useStyles = makeStyles((theme) => ({
  [theme.breakpoints.down("xs")]: {
    width: "100%",
  },
}));
const PrimaryButton = ({
  startIcon,
  endIcon,
  label,
  onClick = () => {},
  fullWidth = false,
  type,
}) => {
  const classes = useStyles();
  return (
    <div>
      <Button
        className={classes.button}
        variant="contained"
        color="primary"
        fullWidth={fullWidth}
        type={type}
        startIcon={startIcon}
        endIcon={endIcon}
        onClick={onClick}
      >
        {label}
      </Button>
    </div>
  );
};

export default PrimaryButton;
