import { Typography } from "@material-ui/core";
import React, { Component } from "react";
import { isEmpty } from "react-redux-firebase";
import PageTitle from "views/components/PageTitle";

class HomeComponent extends Component {
  render() {
    const { users } = this.props;
    return (
      <>
        <PageTitle title="Users" />
        {!isEmpty(users) ? (
          users.map((user) => <Typography>{user.name}</Typography>)
        ) : (
          <Typography>No Users yet</Typography>
        )}
      </>
    );
  }
}

export default HomeComponent;
