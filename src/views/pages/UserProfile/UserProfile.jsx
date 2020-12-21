import React, { Component } from "react";
import {
  Container,
  Breadcrumbs,
  Typography,
  Card,
  CardContent,
  Box,
  Avatar,
  Button,
  capitalize,
} from "@material-ui/core";
import { Link } from "react-router-dom";
import { getFormattedDate } from "utilities/date";
import { OnUsersShow } from "views/components/Authenticate/OnUsersShow";
import { ADMIN } from "state/ducks/app/types";

class UserProfile extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div className="title">User Profile</div>
        </div>
        <Breadcrumbs aria-label="breadcrumb">
          <Link color="inherit" to="/dashboard" className="link">
            <Typography>dashboard</Typography>
          </Link>
          <Typography className="breadcrumbTitle">user</Typography>
        </Breadcrumbs>
        <Card className={classes.card}>
          <CardContent>
            <Box color="#022B3A">
              <Box
                display="flex"
                flexDirection={{ xs: "column", md: "row" }}
                alignItems={{
                  xs: "center",
                  md: "flex-start",
                }}
              >
                <Box paddingX="30px">
                  <Avatar
                    style={{
                      height: "100px",
                      width: "100px",
                      backgroundColor: "#022B3A",
                    }}
                  >
                    <Box fontSize="40px" fontWeight="400">
                      {this.props.auth.user.name[0] || "S"}
                    </Box>
                  </Avatar>
                </Box>
                <Box marginLeft="16px" marginTop={{ xs: "16px", md: "0px" }}>
                  <Box
                    fontSize="26px"
                    fontWeight="600"
                    color="#022B3A"
                    marginTop="12px"
                  >
                    {this.props.auth.user.name}
                  </Box>
                  <Box marginTop={{ xs: "0px", md: "7px" }}>
                    {this.props.auth.user.email}
                  </Box>
                </Box>
              </Box>
              <Box
                padding="18px"
                width="100%"
                display="flex"
                marginTop="18px"
                marginLeft="18px"
                alignItems={{ xs: "center", md: "flex-start" }}
                flexDirection="column"
              >
                <Box display="flex" flexDirection="row" alignItems="flex-end">
                  <Box width="max-content" alignSelf="flex-end">
                    Role:
                  </Box>
                  <Box width="max-content" fontSize="18px" marginLeft="10px">
                    {capitalize(this.props.auth.user.role)}
                  </Box>
                </Box>
                <Box display="flex" flexDirection="row" alignItems="flex-end">
                  <Box width="max-content">Last login: </Box>
                  <Box width="max-content" fontSize="18px" marginLeft="10px">
                    {getFormattedDate(
                      Number(this.props.firebaseAuth.lastLoginAt)
                    )}
                  </Box>
                </Box>
              </Box>
              <Box
                display="flex"
                justifyContent="flex-end"
                marginTop={{ xs: "10px", md: "0px" }}
                paddingRight="10px"
              >
                <OnUsersShow users={[ADMIN]}>
                  <Link to={`/users`} style={{ textDecoration: "none" }}>
                    <Box
                      width={{ xs: "100%", md: "max-content" }}
                      marginRight="10px"
                    >
                      <Button
                        variant="contained"
                        color="primary"
                        fullWidth={true}
                      >
                        Users
                      </Button>
                    </Box>
                  </Link>
                </OnUsersShow>
                <Box width={{ xs: "100%", md: "max-content" }}>
                  <Button
                    variant="outlined"
                    onClick={this.props.logout}
                    fullWidth={true}
                  >
                    Sign out of Lab
                  </Button>
                </Box>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Container>
    );
  }
}

export default UserProfile;
