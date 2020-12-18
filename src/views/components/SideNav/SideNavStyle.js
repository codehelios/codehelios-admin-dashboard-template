const styles = (theme) => ({
  root: {
    display: "flex",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: (props) => props.drawerWidth,
      flexShrink: 0,
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: (props) => props.drawerWidth,
    backgroundColor: "#1D9AC3",
  },
  content: {
    flexGrow: "1",
    minHeight: "100vh",
    padding: theme.spacing(3),
    backgroundColor: "#ececec",
    [theme.breakpoints.down("xs")]: {
      padding: "0",
    },
  },
  sideNavTitle: {
    textAlign: "center",
    fontSize: "26px",
    color: "#ffffff",
    marginBottom: "32px",
  },
});

export default styles;
