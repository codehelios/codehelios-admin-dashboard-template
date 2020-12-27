import React, { Component } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  Box,
  Popover,
  Button,
} from "@material-ui/core";

import ElevationScroll from "views/UI/ElevationScroll";
import { Menu } from "@material-ui/icons";

class MyAppBar extends Component {
  state = { anchorEl: null };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    const id = open ? "simple-popover" : undefined;
    return (
      <ElevationScroll>
        <AppBar position="fixed" className={this.props.classes.appBar}>
          <Toolbar>
            <IconButton
              color="default"
              aria-label="open drawer"
              edge="start"
              size="small"
              onClick={this.props.onClick}
              className={this.props.classes.menuButton}
            >
              <Menu />
            </IconButton>
            <Box width="100%" display="flex" justifyContent="flex-end">
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={this.handleClick}
                color="inherit"
              >
                <Avatar className={this.props.classes.bgAvatar}>
                  {this.props.auth.displayName
                    ? this.props.auth.displayName[0]
                    : this.props.auth.email[0]}
                </Avatar>
              </IconButton>
            </Box>
          </Toolbar>
          <Popover
            id={id}
            style={{
              marginTop: "6px",
              marginRight: "6px",
            }}
            open={open}
            anchorEl={this.state.anchorEl}
            onClose={this.handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <Box
              width={{ xs: "100%", sm: "350px" }}
              display="flex"
              flexDirection="column"
              padding="30px"
              alignItems="center"
            >
              <Avatar
                style={{
                  height: "100px",
                  width: "100px",
                  backgroundColor: "#022B3A",
                }}
              >
                <Box fontSize="40px" fontWeight="400">
                  {this.props.auth.displayName
                    ? this.props.auth.displayName[0]
                    : this.props.auth.email[0]}
                </Box>
              </Avatar>
              <Box
                fontSize="20px"
                fontWeight="600"
                color="#022B3A"
                marginTop="22px"
              >
                {this.props.auth.displayName}
              </Box>
              <Box marginTop="7px">{this.props.auth.email}</Box>
              <Box width={{ xs: "100%", sm: "75%" }} marginTop="24px">
                <Box textAlign="center" fontSize="20px" fontWeight="bold">
                  Admin
                </Box>
              </Box>
              <Box width="100%" marginTop="14px">
                <Button
                  variant="outlined"
                  translate="no"
                  onClick={() => this.props.logout()}
                  style={{ borderRadius: "60px" }}
                  fullWidth={true}
                >
                  Sign out
                </Button>
              </Box>
            </Box>
          </Popover>
        </AppBar>
      </ElevationScroll>
    );
  }
}

export default MyAppBar;
