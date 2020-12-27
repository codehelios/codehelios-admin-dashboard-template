const styles = (theme) => ({
  root: {
    display: "flex",
  },

  listItem: {
    borderRadius: "8px",
    width: (props) => props.listItemWidth,
    margin: "10px auto 0",
    color: "#f9f9f9",
    fontWeight: theme.typography.fontWeightMedium,
  },
  "@global": {
    ".MuiListItem-root.Mui-selected": {
      color: "#ffffff",

      background: "#3A4040 0% 0% no-repeat padding-box !important",
    },
  },
});

export default styles;
