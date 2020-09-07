import "../css/plugin.css";

import React, { useEffect } from "react";
import Footer from '../components/footer'
import Typing from 'react-typing-animation';
import Flicking from "@egjs/react-flicking";
import { Fade, AutoPlay } from "@egjs/flicking-plugins";

import {
  Grid, Typography,
  makeStyles,
  Toolbar,
  Avatar,
  useTheme,
  useMediaQuery,
  TextField,
  InputAdornment,
  IconButton,
  ButtonBase,
  CssBaseline,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
// import Testo from "../components/testo";
import SearchToolBar from "../components/search/searchTool";
import SearchIcon from "@material-ui/icons/Search";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setSearchText, searchInit, setSearchType } from '../redux/actions/searchAction'
import { getRooms } from '../redux/actions/roomActions'
import SearchAutoComplete from "../components/search/searchAutoComplete";




const styles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.default
  },
  FirstView: {
    maxHeight: 700,
    minHeight: 450,
    height: 'calc(100vh - 10px)',
    backgroundImage: `url(${require('../static/background.svg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    color: '#314862',
    padding: '0 3.5%',

  },
  FirstViewMobile: {
    height: 350,
    backgroundImage: `url(${require('../static/background.svg')})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    backgroundPosition: 'bottom',
    color: '#314862',
    padding: '0 3.5%',

  },
  FirstImg: {
    [theme.breakpoints.down('xs')]: {
      maxHeight: 250,
    }
  },
  fImg: {
    width: '100%',
    maxHeight: 450,
    [theme.breakpoints.down('xs')]: {
      height: 300,
    }
  },

  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  avatar: {
    height: 60,
    width: 60
  },
  heading: {
    textAlign: 'center',
    maxWidth: '90%',
    paddingBottom: 12,
    paddingTop: 15, fontWeight: 'bold', paddingRight: 0,
    [theme.breakpoints.down('md')]: {
      maxWidth: '90%',
    },
    [theme.breakpoints.down('xs')]: {
      maxWidth: '100%',
      fontSize: '2rem'
    }
  },
  search: {
    padding: '0 3.5%',
    background: theme.palette.secondary.main,
    [theme.breakpoints.down('xs')]: {
      // margin: '29px 0 0'
    }
  },


  offer: {
    padding: '36px 3.5% 0',

    // height: 420,
    flexDirection: "column",
  },
  image: {
    position: "relative",
    height: 250,
    [theme.breakpoints.down("xs")]: {
      width: "100% !important", // Overrides inline-style
      height: 200,
    },
    "&:hover, &$focusVisible": {
      zIndex: 1,
      "& $imageBackdrop": {
        opacity: 0.15,
      },
      "& $imageMarked": {
        opacity: 0,
      },
      "& $imageTitle": {
        border: "4px solid currentColor",
      },
    },
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%",
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.grey[600],
    opacity: 0.4,
    transition: theme.transitions.create("opacity"),
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${
      theme.spacing(1) + 6
      }px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity"),
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white,
  },

  growth: {
    height: 250,
    flexDirection: 'column'
  },
  growth2: {
    height: 300,
    // padding:'0 20px',
    flexDirection: 'column'
  },
  scroll: {
    '&::-webkit-scrollbar': {
      height: 0,
      backgroundColor: ' #F5F5F5'
    },
  },
  benefit: {
    flexDirection: 'row'
  },

  inputRoot: {
    color: "inherit",

  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    height: 30,
    [theme.breakpoints.up('sm')]: {

      height: 30,
      width: '56vw',
      '&:focus': {
        width: '35ch',
      },
    },
  },
  m: {
    padding: '20px 40px',
    [theme.breakpoints.down('xs')]: {
      padding: '20px 0px',

    }
  },
  animatedNum: {
    paddingBottom: 12,
    fontSize: '3rem',
  },
  differentText: {
    margin: "24px 0", padding: '0 30px'
  },
  learn: {
    marginTop: 43, paddingLeft: 50, paddingRight: 50,
    [theme.breakpoints.down('xs')]: {
      display: "none"
    }
  }
}));

const images = [
  {
    url: require("../static/privet-room.svg"),
    title: "Private Rooms",
    width: "33.33%",
  },
  {
    url: require('../static/Shared-room.svg'),
    title: "Shared Rooms",
    width: "33.33%",
  },
  {
    url: require('../static/entire-house.svg'),
    title: "Entire House",
    width: "33.33%",
  },
];

const FirstView = (sty, b) => {
  return (
    <Grid
      container
      justify="center"
      // alignItems='center'
      className={sty.FirstView}
    >
      <Grid item style={{
        textAlign: 'center', textAlign: '-webkit-center',
        marginTop: '7%'
      }} >
        <Typography variant="h3" className={sty.heading} color='textPrimary'>
            Find Your Next Perfect Place To Live
        </Typography>

        <SearchToolBar />
      </Grid>

    </Grid>

  )
}



function Home(props) {
  const history = useHistory();
  const sty = styles();
  useEffect(() => {
    document.title = 'RoomLelo - Flats, house, rooms for rent without brokerage.'
    props.setSearchText("")
  }, [])


  // var collections = (i) => {
  //   if (i === "Private Rooms") {
  //     props.setSearchType(i)
  //     history.push('/rooms')
  //   }
  //   if (i === "Shared Rooms") {
  //     props.setSearchType(i)
  //     history.push('/rooms')
  //   }
  //   if (i === "Entire House") {
  //     props.setSearchType(i)
  //     history.push('/rooms')
  //   }
  // }

  var different = <>
    <Grid item sm={4} style={{ padding: ' 0 12px' }}>
      <Typography
        variant="h4" color='textPrimary'
        style={{
          paddingBottom: 44,
          fontWeight: "bold",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        How we are different?
          </Typography>
      <Typography
        variant='subtitle1' color='textSecondary'
        style={{
          paddingTop: 15,
          // paddingBottom: 44,
          paddingRight: '20%',
        }}
      >
        It is a rental marketplace that deals with various rental issues, property management and providing legal assistance related to rental disputes.
          </Typography>
    </Grid>
    <Grid item container alignItems='center' sm={8}>


      <Grid
        container
        item
        md={6}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid  style={{ display: "flex" }}>
          <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/esy booking.svg')} />
          <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
            <b>Tenant App</b> - Detailed review and clarity of payments, services request, etc on your personal dashboard               </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        item
        md={6}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >

        <Grid style={{ display: "flex" }}>
          <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/low sequrity.svg')} />
          <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
            <b>Low Security deposit</b> - Worried about rocket high deposits ? We offer you home with min. security deposite            </Typography>
        </Grid>

      </Grid>

      <Grid
        container
        item
        md={6}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid  style={{ display: "flex" }}>
          <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/No_brokerage 1.svg')} />
          <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
            <b>No Brokerage</b> - Save yourself from high brokerage and hidden charges
            </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        item
        md={6}
        alignItems="center"
        style={{ margin: "24px 0" }}
      >
        <Grid  style={{ display: "flex" }}>
          <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/Safety_icon 1.svg')} />
          <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
            <b>Safety and Security</b> - We filter properties which are in safe zone & healthy neighborhood        </Typography>
        </Grid>
      </Grid>


    </Grid>



  </>
  const plugins = [new Fade(), new AutoPlay(2000, "NEXT")];
  var mobileDifferent = <>
    <div className='plugins'>
      <Typography
        variant="h4" color='textPrimary'
        style={{
          paddingTop: 5,
          paddingBottom: 44,
          textAlign: 'center',
          fontWeight: "bold",
        }}
      >
        How we are different?
          </Typography>
      <Flicking
        className="flicking"
        circular={true}
        gap={10}
        duration={500}
        zIndex={1}
        plugins={plugins}
        collectStatistics={false}
      >
        <div className="panel">
          <Grid style={{ display: "flex", flexDirection: 'column', alignItems:'center' }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/assisted visits.svg')} />
            <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
              <b>Tenant App</b><br /> Detailed review and clarity of payments, services request, etc on your personal dashboard
              </Typography>
          </Grid>
        </div>
        <div className="panel">
          <Grid style={{ display: "flex", flexDirection: 'column',alignItems:'center' }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/esy booking.svg')} />
            <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
              <b>Low Security deposit</b><br />Worried about rocket high deposits ? We offer you home with min. security deposite
              </Typography>
          </Grid>
        </div>
        <div className="panel">
          <Grid style={{ display: "flex", flexDirection: 'column',alignItems:'center' }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/Legal_Assistance 1.svg')} />
            <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
              <b>No Brokerage</b><br /> Save yourself from high brokerage and hidden charges
              </Typography>
          </Grid>
        </div>
        <div className="panel">
          <Grid style={{ display: "flex", flexDirection: 'column',alignItems:'center' }}>
            <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick check.svg')} />
            <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
              <b>Safety and Security</b><br /> We filter properties which are in safe zone & healthy neighborhood
        </Typography>
          </Grid>
        </div>

      </Flicking>
    </div>
  </>

  // var offer = <>
  //   <Grid item sm={4}>
  //     <Typography
  //       variant="h4" color='textPrimary'
  //       style={{
  //         paddingTop: 15,
  //         paddingBottom: 44,
  //         fontWeight: "bold",
  //         fontFamily: "Poppins, sans-serif",
  //       }}
  //     >
  //       What we offer
  //         </Typography>
  //     <Typography
  //       variant='subtitle1' color='textSecondary'
  //       style={{
  //         paddingTop: 15,
  //         paddingBottom: 44,
  //       }}
  //     >
  //       It is a rental marketplace that deals with various rental issues, property management and providing legal assistance related to rental disputes.          </Typography>

  //   </Grid>
  //   <Grid item container alignItems='center' sm={8}>

  //     <Grid
  //       container
  //       item
  //       md={6}
  //       alignItems="center"
  //       style={{ margin: "24px 0" }}
  //     >

  //       <Grid alignItems="center" style={{ display: "flex" }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/assisted visits.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Assisted visits</b> - Let us assist you to your exclusive home.
  //             </Typography>
  //       </Grid>

  //     </Grid>

  //     <Grid
  //       container
  //       item
  //       md={6}
  //       alignItems="center"
  //       style={{ margin: "24px 0" }}
  //     >
  //       <Grid alignItems="center" style={{ display: "flex" }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/esy booking.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Easy booking -</b> sign up, fill your details, choose your desired home and pack up to relocate.
  //             </Typography>
  //       </Grid>
  //     </Grid>

  //     <Grid
  //       container
  //       item
  //       md={6}
  //       alignItems="center"
  //       style={{ margin: "24px 0" }}
  //     >
  //       <Grid alignItems="center" style={{ display: "flex" }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/Legal_Assistance 1.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Legal assistance</b> - Ensure all agreements have been properly executed.
  //             </Typography>
  //       </Grid>
  //     </Grid>

  //     <Grid
  //       container
  //       item
  //       md={6}
  //       alignItems="center"
  //       style={{ margin: "24px 0" }}
  //     >
  //       <Grid alignItems="center" style={{ display: "flex" }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick check.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Quality check</b> - We carefully review the quality of all the factors involved with your happy stay.
  //       </Typography>
  //       </Grid>
  //     </Grid>

  //     <Grid
  //       container
  //       item
  //       md={6}
  //       alignItems="center"
  //       style={{ margin: "24px 0" }}
  //     >
  //       <Grid alignItems="center" style={{ display: "flex" }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick maintanence.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Quick maintenance</b> - No embarrassing maintenance delays and inconvenience.
  //       </Typography>
  //       </Grid>
  //     </Grid>
  //     <Grid
  //       container
  //       item
  //       md={6}
  //       alignItems="center"
  //       style={{ margin: "24px 0" }}
  //     >
  //       <Grid alignItems="center" style={{ display: "flex" }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/24x7.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>24*7 helpline</b> - Always available to shoot your trouble.
  //       </Typography>
  //       </Grid>
  //     </Grid>

  //   </Grid>

  // </>
  
  const plugin = [new Fade(), new AutoPlay(2000, "NEXT")];
  const pluginBox = [new Fade(), new AutoPlay(2000, "NEXT")];

  // var mobileOffer = <div className='plugins'>
  //   <Typography
  //     variant="h4" color='textPrimary'
  //     style={{
  //       paddingTop: 5,
  //       paddingBottom: 44,
  //       textAlign: 'center',
  //       fontWeight: "bold",
  //     }}
  //   >
  //     What we offer
  //         </Typography>
  //   <Flicking
  //     className="flicking"
  //     circular={true}
  //     gap={10}
  //     duration={500}
  //     zIndex={1}
  //     plugins={plugin}
  //     collectStatistics={false}
  //   >
  //     <div className="panel">
  //       <Grid alignItems="center" style={{ display: "flex", flexDirection: 'column' }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/assisted visits.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Assisted visits</b><br /> Let us assist you to your exclusive home.
  //             </Typography>
  //       </Grid>
  //     </div>
  //     <div className="panel">
  //       <Grid alignItems="center" style={{ display: "flex", flexDirection: 'column' }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/esy booking.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Easy booking</b><br /> sign up, fill your details, choose your desired home and pack up to relocate.
  //             </Typography>
  //       </Grid>
  //     </div>
  //     <div className="panel">
  //       <Grid alignItems="center" style={{ display: "flex", flexDirection: 'column' }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/Legal_Assistance 1.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Legal assistance</b><br /> Ensure all agreements have been properly executed.
  //             </Typography>
  //       </Grid>
  //     </div>
  //     <div className="panel">
  //       <Grid alignItems="center" style={{ display: "flex", flexDirection: 'column' }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick check.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Quality check</b><br /> We carefully review the quality of all the factors involved with your happy stay.
  //       </Typography>
  //       </Grid>
  //     </div>
  //     <div className="panel">
  //       <Grid alignItems="center" style={{ display: "flex", flexDirection: 'column' }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/quick maintanence.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>Quick maintenance</b><br /> No embarrassing maintenance delays and inconvenience.
  //       </Typography>
  //       </Grid>
  //     </div>
  //     <div className="panel">
  //       <Grid alignItems="center" style={{ display: "flex", flexDirection: 'column' }}>
  //         <Avatar className={sty.avatar} variant='rounded' src={require('../static/icons/24x7.svg')} />
  //         <Typography variant="subtitle2" color='textPrimary' style={{ padding: "0 16px" }}>
  //           <b>24*7 helpline</b><br /> Always available to shoot your trouble.
  //       </Typography>
  //       </Grid>
  //     </div>

  //   </Flicking>
  // </div>
 

  const searchInit = () => {
    const data = {
      keyWord: props.search.searchText,
      type: props.search.searchType,
      whom: props.search.searchWhom,
      price: props.search.searchPrice,
      room: props.search.searchRoomType,
      furnished: props.search.searchFurnished,
    }

    props.searchInit(data)
    history.push('/rooms')

  }
  const FirstViewMobile = <Grid
    container
    className={sty.FirstViewMobile}
  >
    <Grid item style={{

      marginTop: '7%'
    }} >
      <Typography variant="h5" style={{
        textAlign: 'left', fontWeight: 'bold', lineHeight: 1.5
      }} color='textPrimary'>
        Find Your Next<br /> Perfect Place To<br /> Live.
        </Typography>
      {/* <TextField margin='dense' style={{ width: '80%' }}
        onKeyDown={(e) => {
          if (e.keyCode === 13) {
            searchInit()
          }
        }}
        onChange={handleSearchTextChange}
        placeholder="Search Location"
        value={props.search.searchText}
        InputProps={{
          endAdornment: (
            <InputAdornment position='end'>
              <IconButton onClick={searchInit}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      /> */}
      <Grid container style={{width:'80vw'}}>
      <SearchAutoComplete style={{width:'60vw'}}/>

      <IconButton onClick={searchInit}>
        <SearchIcon />
      </IconButton>
    </Grid>
    </Grid>

  </Grid>

  // const collectionsBox = images.map((image, i) => (
  //   <Grid key={i} container onClick={() => collections(image.title)} item sm={4} justify="center" style={{ cursor: 'pointer', paddingTop: 30 }}>
  //     <img alt={image.title} src={image.url} height="90%" width="90%" />
  //     <Typography color='textSecondary' style={{ fontWeight: 'bold', paddingTop: '1%', }}>
  //       {image.title}
  //     </Typography>
  //   </Grid >

  // ))


  const bookNow = () => {
    history.push('/about')
  }
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('700'));

  return (
    <>
      <Grid className={sty.root}>
        <Toolbar />

        {mobile ? FirstViewMobile : FirstView(sty, bookNow)}

        {/* <Grid
          container
          justify="center"
          alignItems="center"
          className={sty.offer}
        >
          <Grid container alignItems="center">
            {mobile ? mobileOffer : offer}
          </Grid>
        </Grid> */}



        {/* <Grid container justify="center" alignItems="center" style={{ paddingBottom: 30, paddingTop: 30 }}>
          <Grid item xs={12} justify="center" container>
            <Typography
              variant="h4" color='textPrimary'
              style={{
                paddingTop: 15,
                fontWeight: "bold",
              }}
            >
              Our collections
            </Typography>
          </Grid>


          <Grid container>

            {mobile ?
              <div className='plugins' >
                <Flicking
                  className="flicking"
                  style={{ height: 'calc(70vw + 35px)' }}
                  circular={true}
                  gap={10}
                  duration={500}
                  zIndex={1}
                  plugins={pluginBox}
                  collectStatistics={false}
                >
                  {images.map((image, i) => (
                    <button key={i} style={{ background: 'transparent', border: 'none' }} onClick={() => collections(image.title)} className="panel" >
                      <Grid container sm={4} justify="center" style={{ cursor: 'pointer', paddingTop: 30, }}>
                        <img alt={image.title} src={image.url} height="85%" width="85%" />
                        <Typography color='textSecondary' style={{ fontWeight: 'bold', paddingTop: '1%', }}>
                          {image.title}
                        </Typography>
                      </Grid>
                    </button>
                  ))}
                </Flicking>
              </div>
              : collectionsBox}
          </Grid>
        </Grid>
 */}

        <Grid container justify="center" alignItems="center" className={sty.offer} style={{ paddingTop: 0,paddingBottom:65 }} >
          <Grid container alignItems="center">
            {mobile ? mobileDifferent : different}
          </Grid>
        </Grid>

        {/* <Growth /> */}
        {/* <Benefit /> */}
        {/* <Testo /> */}
      </Grid>
      <Footer />
    </>
  );
}

Home.propType = {

  search: PropTypes.object.isRequired,
  setSearchText: PropTypes.func.isRequired,
  setSearchType: PropTypes.func.isRequired,

  getRooms: PropTypes.func.isRequired,
  searchInit: PropTypes.func.isRequired,

};

const mapState = (state) => ({

  search: state.search

});
const mapActionToProps = {

  setSearchText,
  searchInit,
  setSearchType,
  getRooms

};
export default connect(mapState, mapActionToProps)(Home)