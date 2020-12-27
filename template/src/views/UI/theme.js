import { createMuiTheme } from "@material-ui/core/styles";
import { button } from "./button";
import { card } from "./card";
import { typography } from "./typography";

export const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#00A9A5",
      // dark: will be calculated from palette.primary.main,
      contrastText: "#fff",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    ...typography,
  },

  overrides: {
    MuiCard: {
      ...card,
    },
    MuiButton: {
      ...button,
    },
    MuiSvgIcon: {
      root: {
        fontSize: "2rem",
      },
    },
  },
});
