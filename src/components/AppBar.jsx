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
import FilterListIcon from '@material-ui/icons/FilterList';
import { Link as RouterLink, useHistory, useLocation ,matchPath} from "react-router-dom"; 
import Logo from "../static/roomlelologo.png";
import SearchFilterDialog from '../components/SearchFilterDialog'

import Filter from '../components/filter/filter'

const useStyles = makeStyles((theme) => ({
  Appbar: {
    background: '#fff',
  },

  grow: {
    flexGrow: 1, 
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
 
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("xm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("xm")]: {
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
    minHeight:'100vh !important',
    right: '0 !important',
    top: '0 !important',
    width:200,
    left: 'auto !important',
    [theme.breakpoints.down('ls')]:{

    }, 
  },

}));

export default function PrimarySearchAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  let location = useLocation()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [show, setShow] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  // const handleProfileMenuOpen = (event) => {
  //   if (props.auth === true) {
  //     setAnchorEl(event.currentTarget);
  //   }
  //   if (props.auth === false) {
  //     history.push("/login");
  //   }
  //   if (props.auth === null) {
  //     setLoading(true);
  //   }
  // };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  // const handleMenuClose = () => {
  //   setAnchorEl(null);
  //   handleMobileMenuClose();
  // };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  // const logout = () => {
  //   props.out();
  //   handleMenuClose();
  // };

  // const handleFocus = (event) =>{
  //   console.log(event)
  // }
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      classes={{ paper: classes.menu }}
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      // keepMounted
      // anchorPosition={{ left: 100, top: 16 }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem onClick={() => {
        history.push("/whyus")
        handleMobileMenuClose()
      }}>
        <p>Why Prefer us</p>
      </MenuItem>
      <MenuItem onClick={() => {
        history.push("/properties")
        handleMobileMenuClose()
      }}>

        <p>Our Properties</p>
      </MenuItem>
      <MenuItem onClick={() => {
        history.push("/refer")
        handleMobileMenuClose()
      }}>

        <p>Refer & Earn</p>
      </MenuItem>
      <MenuItem onClick={() => {
        history.push("/login")
        handleMobileMenuClose()
      }}>

        <p>Login</p>
      </MenuItem>
      <MenuItem onClick={() => {
        history.push('/signup')
        handleMobileMenuClose()
      }}>

        <p>List with us</p>
      </MenuItem>
    </Menu>
  );

  const handleFilterClose = () => {
    setShow(!show)
  }

  const match = matchPath(location.pathname, {
    path: "/rooms/:id",
    exact: true,
    strict: false
  });
  const match1 = matchPath(location.pathname, {
    path: "/",
    exact: true,
    strict: false
  });
 
  return (
    <div className={classes.grow}>
      <SearchFilterDialog show={show} handleClose={handleFilterClose} />
      <AppBar color='inherit' className={classes.Appbar}>
        <Toolbar variant="regular">
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

            {/* <Button onClick={() => history.push("/whyus")} color="inherit">
              <Typography variant="button">Why Prefer us</Typography>
            </Button> */}

            {/* <Button color="inherit" onClick={() => history.push("/properties")}>
              <Typography variant="button">Our Properties</Typography>
            </Button> */}

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

        

        {match || match1 ?'':
          <Toolbar>
            <Filter />
          </Toolbar>}

      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
