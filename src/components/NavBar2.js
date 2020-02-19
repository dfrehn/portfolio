import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import { Grid, Button } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import logo from "../assets/logoWhite.png";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/core/styles";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const drawerWidth = 300;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  // backgroundImage: {
  //   position: 'absolute',
  //   width: '100%',
  //   height: '100%',
  //   zIndex: -1,
  //   backgroundImage: `url(${bg})`,
  //   backgroundRepeat: 'no-repeat',
  //   backgroundPosition: 'left -120px',
  //   backgroundSize: '100% auto',
  //   [theme.breakpoints.down('sm')]: {
  //     display: 'none',
  //   },
  // },
  appBar: {
    backgroundColor: "rgba(0,0,0,0.5)",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: drawerWidth
  },
  title: {
    flexGrow: 1,
    marginTop: 10,
    paddingRight: 20
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "black",
      width: "100%"
    }
  },
  logo: {
    width: "10%",
    paddingtop: 5,
    [theme.breakpoints.down("xs")]: {
      display: "none"
    }
  },
  hamburger: {
    color: "white",
    [theme.breakpoints.down("xs")]: {
      color: "white"
    }
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-start"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginRight: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginRight: 0
  },
  buttonMenu: {
    color: "white",
    width: "100%"
  }
}));

const StyledListItem = withStyles({
  root: {
    webkitAppearance: "none",
    appearance: "none",
    webkitFilter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1))",
    filter: "drop-shadow(0 5px 5px rgba(0, 0, 0, 0.1))",
    webkitTransition: "all .5s ease",
    transition: "all .5s ease",
    border: "none",
    textTransform: "uppercase",
    boxSizing: "border-box",
    fontWeight: 400,
    fontSize: "13px",
    cursor: "pointer",
    boxShadow: "rgba(255, 255, 255, 0.5)",
    "&:hover": {
      color: "black",
      background: "white",
      webkitFilter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))",
      filter: "drop-shadow(0 0 5px rgba(0, 0, 0, 0.2))"
    }
  }
})(ListItem);

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Grid container>
        <Grid item xs={12} />
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
              [classes.appBarShift]: open
            })}
          >
            <Toolbar>
              <Button component={Link} to="/" className={classes.logo}>
                <img src={logo} />
              </Button>
              <Typography
                variant="h6"
                noWrap
                className={classes.title}
              ></Typography>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
              >
                <MenuIcon className={classes.hamburger} />
              </IconButton>
            </Toolbar>
          </AppBar>
          <main
            className={clsx(classes.content, {
              [classes.contentShift]: open
            })}
          >
            <div className={classes.drawerHeader} />
          </main>
          <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="right"
            open={open}
            classes={{
              paper: classes.drawerPaper
            }}
          >
            <div className={classes.drawerHeader}>
              <IconButton
                onClick={handleDrawerClose}
                style={{ color: "white" }}
              >
                {theme.direction === "rtl" ? (
                  <ChevronLeftIcon />
                ) : (
                  <ChevronRightIcon />
                )}
              </IconButton>
            </div>
            <Divider />
            <List>
              <StyledListItem
                button
                component={Link}
                to="/"
                className={classes.buttonMenu}
              >
                <h3>HOME</h3>
              </StyledListItem>
              <StyledListItem
                button
                component={Link}
                to="/posters"
                className={classes.buttonMenu}
              >
                <h3>365 POSTERS</h3>
              </StyledListItem>
              <StyledListItem
                button
                component={Link}
                to="/web-design"
                className={classes.buttonMenu}
              >
                <h3>WEB DESIGN</h3>
              </StyledListItem>
              <Divider />
              <StyledListItem
                button
                component={Link}
                to="/contact"
                className={classes.buttonMenu}
              >
                <h3>CONTACT</h3>
              </StyledListItem>
            </List>
          </Drawer>
        </div>
        <div></div>
      </Grid>
    </ClickAwayListener>
  );
}
