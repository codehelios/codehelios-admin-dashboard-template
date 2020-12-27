import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { SplashScreen } from "views/components";

class HomeComponent extends Component {
  render() {
    return (
      <>
        <SplashScreen />
        <Typography variant="h2">Home Page</Typography>
      </>
    );
  }
}

export default HomeComponent;
