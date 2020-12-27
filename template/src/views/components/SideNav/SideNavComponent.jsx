import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";

import SideNavLinks from "./SideNavLinks";
import { Container, Typography } from "@material-ui/core";

class SideNav extends React.Component {
  render() {
    const {
      classes,
      theme,
      children,
      AppBar,
      isMobileMenuOpen,
      currentTab,
    } = this.props;

    const drawer = (
      <div>
        <div className={classes.toolbar} />
        <Typography align="center" variant="h1">
          Admin
        </Typography>
        <Divider
          style={{
            margin: "20px",
            border: "1px solid #FFFFFF4D",
            backgroundColor: "none",
          }}
        />
        <SideNavLinks
          listItemWidth={this.props.listItemWidth}
          currentTab={currentTab}
        />
      </div>
    );

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar drawerWidth={this.props.drawerWidth} />

        <nav className={classes.drawer} aria-label="Features">
          <Hidden smUp implementation="css">
            <Drawer
              variant="temporary"
              anchor={theme.direction === "rtl" ? "right" : "left"}
              open={isMobileMenuOpen}
              onClose={() => this.props.onClose()}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          </Hidden>
          <Hidden xsDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              {drawer}
            </Drawer>
          </Hidden>
        </nav>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Container>{children}</Container>
        </main>
      </div>
    );
  }
}

export default SideNav;
