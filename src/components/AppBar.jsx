import React from "react";
import {
  Link,
  Button,
  InputBase,
  fade,
  makeStyles,
  Menu,
  AppBar,
  MenuItem,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search"; 
import { Link as RouterLink, useHistory } from "react-router-dom"; 
import Logo from "../static/roomlelologo.webp";

const useStyles = makeStyles((theme) => ({
  Appbar: {
    background:'#fff',
  },

  grow: {
    flexGrow: 1,
    // width:'100vw'
  },
  menuButton: {
    padding: 0,
  },
  title: {
    display: "block",
    color: "#fff",
    fontSize: "x-large",
    letterSpacing: "1px",
    fontFamily:
      "Wallman, -apple-system, BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans- serif,Apple Color Emoji,Segoe UI Emoji, Segoe UI Symbol",
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.55),
    "&:hover": {
      backgroundColor: theme.palette.common.white,
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  button: {
    borderRadius: "50%",
    padding: 9,
    // background: Theme.boxColor,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: `4px 4px 5px 1px rgba(00,00,00,0.2),-4px -4px 5px 1px rgba(255,255,255,0.2)`,
  },
  menu: {
    // background: Theme.boxColor,
    right: 16,
    left: "auto !important",
  },
}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
 
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    if (props.auth === true) {
      setAnchorEl(event.currentTarget);
    }
    if (props.auth === false) {
      history.push("/login");
    }
    if (props.auth === null) {
      setLoading(true);
    }
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const logout = () => {
    props.out();
    handleMenuClose();
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      classes={{ paper: classes.menu }}
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      keepMounted
      anchorPosition={{ left: 100, top: 16 }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => {history.push("/whyus")
    handleMobileMenuClose()}}>
        <p>Why Prefer us</p>
      </MenuItem>
      <MenuItem  onClick={() => {history.push("/properties")
    handleMobileMenuClose()}}>
      
        <p>Our Properties</p>
      </MenuItem>
      <MenuItem onClick={() => {history.push("/refer")
    handleMobileMenuClose()}}>
      
        <p>Refer & Earn</p>
      </MenuItem>
      <MenuItem onClick={() =>{ history.push("/login")
      handleMobileMenuClose()}}>
   
        <p>Login</p>
      </MenuItem>
      <MenuItem onClick={()=>{history.push('/signup')
       handleMobileMenuClose()}}>
   
        <p>List with us</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}> 
        <AppBar color='' className={classes.Appbar} position="static">
          <Toolbar>
            <IconButton
              onClick={() => {
                history.push("/");
              }}
              edge="start"
              className={classes.menuButton}
              disableFocusRipple
              disableRipple
              style={{ backgroundColor: "transparent" }}
            >
              <img src={Logo} height="45px" alt="Roomlelo" />
            </IconButton>
            <div className={classes.grow} />

            <div className={classes.sectionDesktop}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
              />
            </div>
              <Button onClick={() => history.push("/whyus")} color="inherit">
                <Typography variant="button">Why Prefer us</Typography>
              </Button>

              <Button color="inherit"  onClick={() => history.push("/properties")}>
                <Typography variant="button">Our Properties</Typography>
               
              </Button>

              <Button onClick={() => history.push("/refer")} color="inherit">
                <Typography variant="button">Refer & Earn</Typography>
               
              </Button>
              {props.auth === true && ""}
              <Button onClick={() => history.push("/login")} color="inherit">
                <Typography variant="button">Login</Typography>
              </Button>

              <Button variant='outlined' onClick={() => history.push("/signup")}
                // disabled={props.auth === null}
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <Typography variant="button">List with us</Typography> 
              </Button>
            </div>

            <div className={classes.sectionMobile}>
              <IconButton
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar> 
      {renderMobileMenu} 
    </div>
  );
}
