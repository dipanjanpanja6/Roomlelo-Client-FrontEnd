import React from "react";
import {
  Button, makeStyles, Menu, AppBar, MenuItem, Toolbar, IconButton, Typography, CssBaseline, useScrollTrigger, ButtonGroup,
  List, ListItem, ListItemIcon, ListItemText, Hidden, Drawer, useTheme, Avatar, Grid, SvgIcon, Fab, useMediaQuery,
} from "@material-ui/core";
import { useHistory, useLocation, matchPath } from "react-router-dom";
import Logo from "../static/roomlelologo.webp";
import SearchFilterDialog from './search/SearchFilterDialog'
import PropTypes from 'prop-types';
import Filter from '../components/filter/filter'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { connect } from "react-redux";
import MenuIcon from '@material-ui/icons/Menu';
import CallIcon from '@material-ui/icons/Call';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import HeadsetMicOutlinedIcon from '@material-ui/icons/HeadsetMicOutlined';
import { ReactComponent as NoticeIcon } from '../static/icons/dashboard/Notice_Board.svg';
import { ReactComponent as Payment } from '../static/icons/dashboard/Payment.svg';
import { ReactComponent as Deals } from '../static/icons/dashboard/Deals.svg';
import { contact_no } from "../config/config";

const drawerWidth = 240;
const useStyles = makeStyles((theme) => ({
  Appbar: {
    background: !theme.palette.text.primary,
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    padding: 0,
  },
  menuButtonL: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },


  sectionDesktop: {
    width: '100%',
    display: "none",
    [theme.breakpoints.up("xm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    paddingLeft: 10,
    width: '100%',
    display: "flex",
    [theme.breakpoints.up("xm")]: {
      display: "none",
    },
  },

  menu: {
    minHeight: '100vh !important',
    right: '0 !important',
    top: '0 !important',
    width: 200,
    left: 'auto !important',
    [theme.breakpoints.down('ls')]: {

    },
  },
  menuItem: {
    width: '100%'
  },
  list: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // height: '95vh'
  },
  toolbar: theme.mixins.toolbar,
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: drawerWidth,
    background: 'linear-gradient(175.13deg, #3CB7C6 0%, rgba(126,200,209) 121.02%)'
  },
}));

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

function PrimaryAppBar(props) {
  const classes = useStyles();
  const history = useHistory();
  let location = useLocation()
  const { window } = props;
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const container = window !== undefined ? () => window().document.body : undefined;


  const [show, setShow] = React.useState(false);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);



  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const logout = () => {
    props.out();
    handleMobileMenuClose();
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      classes={{ paper: classes.menu, list: classes.list }}
      anchorEl={mobileMoreAnchorEl}
      id={mobileMenuId}
      // keepMounted
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem className={classes.menuItem} onClick={() => {
        history.push('/about')
        handleMobileMenuClose()
      }}><p>About Us</p></MenuItem>

      <MenuItem className={classes.menuItem} onClick={() => {
        history.push('/rooms')
        handleMobileMenuClose()
      }}><p>Search Rooms</p></MenuItem>

      <div className={classes.grow} />

      <ButtonGroup variant='contained' disableElevation orientation='vertical' fullWidth color='secondary'>

        {/* <Button onClick={() => {
          history.push("/login")
          handleMobileMenuClose()
        }}>Login</Button> */}

        <Button variant='contained' disableElevation disableFocusRipple color='primary' style={{padding:'12px 0',borderRadius:0}} onClick={() => {
          history.push("/joinus")
          handleMobileMenuClose()
        }} > List with us</Button>
      </ButtonGroup>
    </Menu>
  );

  const handleFilterClose = () => {
    setShow(!show)
  }

  const roomsPage = matchPath(location.pathname, {
    path: "/rooms/:id",
    exact: true,
    strict: false
  });
  const match = matchPath(location.pathname, {
    path: "/rooms",
    exact: true,
    strict: false
  });
  const home = matchPath(location.pathname, {
    path: "/",
    exact: true,
    strict: false
  });
  const dashboard = matchPath(location.pathname, {
    path: "/dashboard",
    exact: true,
    strict: false
  });
  const drawer = (
    <Grid item style={{ color: '#fff' }}>
      <div className={classes.toolbar} />
      <Grid container justify='center' >
        <Avatar src='' style={{ height: 150, width: 150 }} />
        <Typography style={{ padding: '20px 0', color: '#fff' }}>Dipanjan Panja</Typography>
      </Grid>
      <List>

        <ListItem button >
          <ListItemIcon >
            <AccountCircleOutlinedIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={'My Profile'} />
        </ListItem>
        <ListItem button >
          <ListItemIcon >
            <SvgIcon style={{ color: '#fff' }} >
              <Payment />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={'My Payment'} />
        </ListItem>
        <ListItem button >
          <ListItemIcon >
            <SvgIcon style={{ color: '#fff' }} >
              <NoticeIcon />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={'Notice Board'} />
        </ListItem>
        <ListItem button >
          <ListItemIcon >
            <SvgIcon style={{ color: '#fff' }} >
              <Deals />
            </SvgIcon>
          </ListItemIcon>
          <ListItemText primary={'Deals'} />
        </ListItem>
        <ListItem button >
          <ListItemIcon >
            <HeadsetMicOutlinedIcon style={{ color: '#fff' }} />
          </ListItemIcon>
          <ListItemText primary={'Support'} />
        </ListItem>
      </List>
    </Grid>
  );
  const mobile = useMediaQuery(theme.breakpoints.down('700'));
  return (
    <>
      <SearchFilterDialog show={show} handleClose={handleFilterClose} />
      <React.Fragment>
        <CssBaseline />
        <ElevationScroll {...props}>
          <AppBar color='inherit' className={classes.Appbar}>
            <Toolbar variant="regular">

              {dashboard &&
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="start"
                  onClick={handleDrawerToggle}
                  className={classes.menuButtonL}
                >
                  <MenuIcon />
                </IconButton>
              }
              <div className={classes.sectionDesktop}>
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


                <ButtonGroup variant='contained' size='medium' color='secondary' style={{ margin: 7 }}>

                  {/* {props.auth === true ?
                    <Button onClick={logout}>
                      Logout
                    </Button> :
                    <Button onClick={() => history.push("/login")}>
                      Login
                    </Button>} */}
                  <Button
                    // variant='contained' color='primary'
                    style={{ background: '#ff0' }}
                    onClick={() => history.push("/joinus")} >
                    List with us
                  </Button>
                </ButtonGroup>

              </div>

              <div className={classes.sectionMobile}>
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

                  <img src={require('../static/logoMobile.svg')} height="45px" alt="Roomlelo" />
                </IconButton>
                {home &&
                  <Typography onClick={handleFilterClose} variant='subtitle1' style={{ padding: '0 0 0 12px', cursor: 'pointer', alignSelf: 'center' }}>
                    {props.search.searchWhom ? props.search.searchWhom : 'For Whom'} {<IconButton className={classes.menuButton}>
                      <ExpandMoreIcon />
                    </IconButton>}
                  </Typography>}

                <div className={classes.grow} />

                <IconButton
                  aria-label="show more"
                  aria-controls={mobileMenuId}
                  className={classes.menuButton}

                  aria-haspopup="true"
                  onClick={handleMobileMenuOpen}
                  color="inherit"
                >
                  <img alt='menu' src={require('../static/icons/MenuButton.svg')} />
                </IconButton>
              </div>
            </Toolbar>


            {match ?
              <Toolbar variant="regular" disableGutters>
                <Filter onFilter={handleFilterClose} />

              </Toolbar> : ''}

          </AppBar>
        </ElevationScroll>
        {dashboard && <nav className={classes.drawer} aria-label="mailbox folders">
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Hidden smUp implementation="css">
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={mobileOpen}
              onClose={handleDrawerToggle}
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
        }
        {renderMobileMenu}
      </React.Fragment>
      {!roomsPage && <a href={`tel:${contact_no}`}> <Fab size='small' variant={mobile ? 'round' : 'extended'} style={{
        position: 'fixed',
        bottom: 8, right: 8,
        background: 'rgb(0 255 53)',
        zIndex: 100
      }} >
        <CallIcon />
        {!mobile && 'call us'}
      </Fab>
      </a>}
    </>
  );
}
PrimaryAppBar.PropType = {
  search: PropTypes.object.isRequired,
}
const mapState = (state) => ({
  search: state.search
})

export default connect(mapState)(PrimaryAppBar)
