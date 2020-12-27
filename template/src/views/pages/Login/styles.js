const styles = (theme) => ({
  root: {
    display: "flex",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },

  loginCard: {
    display: "flex",
    flexDirection: "column",
    padding: "24px",
    alignItems: "center",
    width: "400px",
    backgroundColor: "#fff",
    borderRadius: "6px",
    fontFamily: "Nunito",
  },
  title: {
    font: "Bold 32px/44px Nunito",
    letterSpacing: "0",
    color: "#022B3A",
  },
  subTitle: {
    font: "Regular 18px/24px Nunito",
    letterSpacing: "0",
    color: "#022B3A",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    height: "230px",
    alignItems: "flex-end",
    justifyContent: "space-around",
    width: "100%",
    marginTop: "30px",
    marginBottom: "10px",
  },
  input: {
    width: "100%",
    marginBottom: "24px",
  },
  loginButton: {
    backgroundColor: "#00A9A5",
    width: "100%",
    "&:hover": {
      backgroundColor: "#009e9b",
    },

    "& img": {
      marginRight: "5px",
    },
  },
  gButton: {
    marginTop: "18px",
    marginBottom: "28px",
    display: "flex",
    width: "100%",
    background: "#E4E4E4 0% 0% no-repeat padding-box",
  },
  gButtonLabel: {
    color: "#022B3A",
    "& > div": {
      flexGrow: "1",
    },
  },
  gButtonStartIcon: {
    height: "20px",
    width: "20px",
  },
});

export default styles;
