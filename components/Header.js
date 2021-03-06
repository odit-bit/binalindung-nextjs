import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import Link from "../src/Link";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    margin: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  linkMenu: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <header>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Link href="/" color="inherit" underline="none">
              Binalindung
            </Link>
          </Typography>
          <div className={classes.linkMenu}>
            <Link href="/kabinet" color="inherit" underline="none">
              Kabinet
            </Link>
            <Link href="/laporan" color="inherit" underline="none">
              Koran-BL
            </Link>
          </div>

          {/* <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton> */}
        </Toolbar>
      </AppBar>
    </header>
  );
}
