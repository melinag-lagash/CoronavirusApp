import { makeStyles } from "@material-ui/core/styles";
import planet from "../resources/earth.jpg";
const useStyles = makeStyles(theme => ({
  container: {
    paddingLeft: 0,
    paddingRight: 0
  },
  grid: {
    display: "flex",
    height: "900px",
    alignItems: "center",
    justifyContent: "center",
    backgroundImage: `url(${planet})`,
    [theme.breakpoints.down("md")]: {
      backgroundPosition: "0% 0%"
    },
    [theme.breakpoints.up("lg")]: {
      backgroundPosition: "center"
    }
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    maxWidth: 300,
    padding: theme.spacing(4),
    opacity: 0.6
  },
  item: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}));

export default useStyles;
